import { test, expect } from '@playwright/test';

for (const width of [360, 390, 768, 1440]) {
  test(`layout and content at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Design that works.');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1400);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(await page.locator('body').evaluate(el => getComputedStyle(el).fontFamily)).toContain('Epilogue');
    for (const id of ['about', 'services', 'works', 'contact']) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `test-results/home-${width}.png`, fullPage: true });
  });
}

test('mobile menu traps focus, Escape closes and anchor navigates', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Menu' });
  await toggle.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  for (let i = 0; i < 9; i++) {
    await page.keyboard.press('Tab');
    expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await dialog.getByRole('link', { name: 'Works' }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page).toHaveURL(/#works$/);
});

test('reduced motion and keyboard access', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await expect(page.locator('.cursor')).not.toBeVisible();
  expect(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior)).toBe('auto');
  await expect(page.locator('h1')).toBeVisible();
});

test('content survives without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What we do.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Start a project', exact: false }).first()).toHaveAttribute('href', /^mailto:/);
  await context.close();
});

test('hero expands on scroll and navbar becomes compact', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.waitForTimeout(1700);
  await expect(page.locator('.hero-v2')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await expect(page.locator('.hero-new-title .yellow-text')).toHaveCSS('color', 'rgb(12, 12, 12)');
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', /icon\.png/);
  const initial = await page.locator('.hero-reel').boundingBox();
  await page.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }));
  await page.waitForTimeout(1200);
  await expect(page.locator('header')).toHaveClass(/is-compact/);
  const expanded = await page.locator('.hero-reel').boundingBox();
  expect(expanded!.width).toBeGreaterThan(initial!.width * 1.4);
  expect(await page.locator('.hero-heading-group').evaluate(el => Number(getComputedStyle(el).opacity))).toBeLessThan(0.1);
  await page.screenshot({ path: 'test-results/hero-expanded.png' });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(1200);
  await expect(page.locator('header')).not.toHaveClass(/is-compact/);
  await page.screenshot({ path: 'test-results/hero-top.png' });
});

test('metadata and published assets respond successfully', async ({ request }) => {
  for (const url of ['/', '/robots.txt', '/sitemap.xml', '/icon.png', '/opengraph-image', '/brand/wordmark.svg', '/brand/mark.svg']) {
    const response = await request.get(url);
    expect(response.ok(), url).toBe(true);
  }
});
