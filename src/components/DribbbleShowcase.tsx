import Image from 'next/image';

const ROW_1_SHOTS = [
  { src: '/assets/dribbble/dribbble-shot-1.png', title: 'Dribbble Shot 1' },
  { src: '/assets/dribbble/shot-1.png', title: 'Fintech Dashboard & Analytics UI Kit' },
  { src: '/assets/dribbble/dribbble-shot-2.png', title: 'Dribbble Shot 2' },
  { src: '/assets/dribbble/shot-2.png', title: 'Museum & Heritage Classical Web Design' },
  { src: '/assets/dribbble/dribbble-shot-3.png', title: 'Dribbble Shot 3' },
  { src: '/assets/dribbble/shot-3.png', title: 'Modern SaaS Product Showcase' },
  { src: '/assets/dribbble/dribbble-shot-4.png', title: 'Dribbble Shot 4' },
  { src: '/assets/dribbble/shot-4.png', title: 'Wellness Digital Platform Concept' },
  { src: '/assets/dribbble/dribbble-shot-5.png', title: 'Dribbble Shot 5' },
  { src: '/assets/dribbble/shot-5.png', title: 'Finance Spend Control & Analytics' },
  { src: '/assets/dribbble/shot-6.png', title: 'Curated Heritage Exhibition Web Experience' },
];

const ROW_2_SHOTS = [
  { src: '/assets/dribbble/dribbble-shot-6.png', title: 'Dribbble Shot 6' },
  { src: '/assets/dribbble/shot-7.png', title: 'Interactive Web Animations & Prototypes' },
  { src: '/assets/dribbble/dribbble-shot-7.png', title: 'Dribbble Shot 7' },
  { src: '/assets/dribbble/shot-8.png', title: 'Healthcare & Wellness Mobile App' },
  { src: '/assets/dribbble/dribbble-shot-8.png', title: 'Dribbble Shot 8' },
  { src: '/assets/dribbble/shot-9.png', title: 'Predictive Cash Flow Dashboard' },
  { src: '/assets/dribbble/dribbble-shot-9.png', title: 'Dribbble Shot 9' },
  { src: '/assets/dribbble/shot-10.png', title: 'Art & Design System Interface' },
  { src: '/assets/dribbble/dribbble-shot-10.png', title: 'Dribbble Shot 10' },
  { src: '/assets/dribbble/shot-11.png', title: 'Creative Brand Digital Showcase' },
  { src: '/assets/dribbble/shot-12.png', title: 'E-commerce & Product Exploration Concept' },
];

export default function DribbbleShowcase() {
  return (
    <section className="dribbble-showcase-section" aria-label="More about our works">
      <div className="dribbble-showcase-header">
        <div className="showcase-title-col">
          <h2 className="showcase-title">
            More about<br />our works
          </h2>
        </div>

        <div className="showcase-action-col">
          <p className="showcase-subtitle">Purchase UI Kit or see our showcase</p>
          <div className="showcase-btn-group">
            <a
              href="https://ui8.net/users/faisal-kholid"
              target="_blank"
              rel="noreferrer"
              className="showcase-pill-btn ui8-pill-btn"
              aria-label="Visit Faisal Kholid's UI8 Store"
            >
              <svg
                className="pill-btn-icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.9999 6.33984C17.8599 6.33984 17.4199 6.36986 17.4199 6.78986C17.4199 7.07986 17.6399 7.24985 17.9999 7.24985C18.3599 7.24985 18.5799 7.07986 18.5799 6.78986C18.5799 6.45986 18.2799 6.33984 17.9999 6.33984Z" fill="#308BE6"/>
                <path d="M18.0005 5.51172C18.2705 5.51172 18.4406 5.36171 18.4406 5.13171C18.4406 4.85171 18.2105 4.76172 18.0005 4.76172C17.7905 4.76172 17.5605 4.86171 17.5605 5.13171C17.5605 5.36171 17.7305 5.51172 18.0005 5.51172Z" fill="#308BE6"/>
                <path d="M18 2C15.9 2 14.19 3.61 14.02 5.66C14 5.77 14 5.89 14 6C14 8.21 15.79 10 18 10C18.35 10 18.68 9.96 19 9.87C20.73 9.43 22 7.86 22 6C22 3.79 20.21 2 18 2ZM18 8.20001C17.01 8.20001 16.4 7.70001 16.4 6.89001C16.4 6.50001 16.58 6.15 16.9 5.91C16.66 5.7 16.53 5.40999 16.53 5.07999C16.53 4.30999 17.12 3.79999 17.99 3.79999C18.86 3.79999 19.45 4.31999 19.45 5.07999C19.45 5.40999 19.33 5.7 19.08 5.91C19.41 6.14 19.59 6.49001 19.59 6.89001C19.6 7.70001 18.99 8.20001 18 8.20001Z" fill="#308BE6"/>
                <path d="M18 11.4984C16.85 11.4984 15.78 11.1485 14.9 10.5385C14.83 10.4885 14.74 10.5384 14.74 10.6184L14.75 15.4384C14.75 15.8584 14.41 16.1884 14 16.1884C13.59 16.1884 13.25 15.8584 13.25 15.4384V10.4984C13.25 10.1684 13.47 9.88845 13.77 9.78845C13.85 9.75845 13.9 9.64844 13.84 9.58844C13.01 8.62844 12.5 7.37845 12.5 6.00845C12.5 5.83845 12.51 5.65843 12.53 5.48843C12.53 5.44843 12.54 5.41845 12.54 5.37845C12.57 5.14845 12.45 4.92843 12.25 4.82843L11.35 4.39844C10.81 4.14844 10.19 4.14844 9.64999 4.39844L3.14999 7.45844C2.44999 7.78843 2 8.48843 2 9.26843V16.7285C2 17.5085 2.44999 18.2085 3.14999 18.5385L9.64999 21.5984C10.19 21.8484 10.81 21.8484 11.35 21.5984L17.85 18.5385C18.55 18.2085 19 17.5085 19 16.7285V12.0184C19 11.7084 18.71 11.4684 18.4 11.4884C18.27 11.4984 18.14 11.4984 18 11.4984ZM11.75 13.4984C11.75 15.0184 10.52 16.2484 9 16.2484C7.48 16.2484 6.25 15.0184 6.25 13.4984V10.4984C6.25 10.0884 6.59 9.74844 7 9.74844C7.41 9.74844 7.75 10.0884 7.75 10.4984V13.4984C7.75 14.1884 8.31 14.7484 9 14.7484C9.69 14.7484 10.25 14.1884 10.25 13.4984V10.4984C10.25 10.0884 10.59 9.74844 11 9.74844C11.41 9.74844 11.75 10.0884 11.75 10.4984V13.4984Z" fill="#353535"/>
              </svg>
              <span>UI8 Store</span>
            </a>

            <a
              href="https://dribbble.com/faisalkholid"
              target="_blank"
              rel="noreferrer"
              className="showcase-pill-btn dribbble-pill-btn"
              aria-label="Visit Faisal Kholid's Dribbble profile"
            >
              <svg
                className="pill-btn-icon"
                width="22"
                height="22"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0_dribbble_btn)">
                  <path d="M13.5 0.929688C20.4609 0.929688 26.0929 6.77031 26.0929 13.9781C26.0929 21.1859 20.4609 27.0375 13.5 27.0375C6.53901 27.0375 0.906982 21.1969 0.906982 13.9891C0.906982 6.78125 6.53901 0.929688 13.5 0.929688Z" fill="#E74D89"/>
                  <path d="M13.5 27.9672C6.05391 27.9672 0 21.7 0 13.9891C0 6.26719 6.05391 0 13.5 0C20.9461 0 27 6.26719 27 13.9781C27 21.6891 20.9461 27.9672 13.5 27.9672ZM24.8801 15.8922C24.4898 15.7609 21.3152 14.7875 17.6977 15.3781C19.2059 19.6656 19.8176 23.1656 19.9336 23.8875C22.5281 22.0828 24.3738 19.2172 24.8801 15.8922ZM18.0035 24.9922C17.8348 23.9422 17.1598 20.2891 15.5461 15.9359C15.525 15.9469 15.4934 15.9578 15.4723 15.9578C8.96484 18.3094 6.63398 22.9797 6.42305 23.4172C8.37422 24.9922 10.8316 25.9328 13.5 25.9328C15.0926 25.9438 16.6219 25.6047 18.0035 24.9922ZM4.93594 21.9844C5.19961 21.525 8.36367 16.1 14.3121 14.0984C14.4598 14.0437 14.618 14 14.7656 13.9563C14.4809 13.2781 14.1645 12.6 13.827 11.9328C8.06836 13.7156 2.47852 13.6391 1.97227 13.6281C1.97227 13.7484 1.96172 13.8688 1.96172 13.9891C1.97227 17.0625 3.09023 19.8625 4.93594 21.9844ZM2.21484 11.55C2.73164 11.5609 7.47773 11.5828 12.8777 10.0953C10.9688 6.57344 8.90156 3.62031 8.60625 3.19375C5.36836 4.76875 2.96367 7.85313 2.21484 11.55ZM10.8 2.38437C11.1164 2.82187 13.2152 5.775 15.1031 9.37344C19.2059 7.77656 20.9355 5.37031 21.1465 5.06406C19.1109 3.19375 16.432 2.05625 13.5 2.05625C12.5719 2.05625 11.6648 2.17656 10.8 2.38437ZM22.4227 6.44219C22.1801 6.78125 20.25 9.35156 15.9891 11.1562C16.2527 11.725 16.5164 12.3047 16.759 12.8844C16.8434 13.0922 16.9277 13.3 17.0121 13.4969C20.8512 12.9938 24.6586 13.8031 25.0383 13.8797C25.0066 11.0688 24.0363 8.47656 22.4227 6.44219Z" fill="#B2215A"/>
                </g>
                <defs>
                  <clipPath id="clip0_dribbble_btn">
                    <rect width="27" height="28" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span>Dribbble</span>
            </a>
          </div>
        </div>
      </div>

      <div className="dribbble-marquee-wrap">
        {/* Row 1: Running Left */}
        <div className="dribbble-marquee-row marquee-left">
          <div className="marquee-track">
            {ROW_1_SHOTS.map((shot, idx) => (
              <a
                key={idx}
                href="https://dribbble.com/faisalkholid"
                target="_blank"
                rel="noreferrer"
                className="marquee-card"
                title={`${shot.title} — View on Dribbble`}
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  unoptimized
                  className="marquee-card-img"
                  sizes="(max-width: 800px) 340px, 500px"
                />
              </a>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {ROW_1_SHOTS.map((shot, idx) => (
              <a
                key={`dup-${idx}`}
                href="https://dribbble.com/faisalkholid"
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                className="marquee-card"
                title={`${shot.title} — View on Dribbble`}
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  unoptimized
                  className="marquee-card-img"
                  sizes="(max-width: 800px) 340px, 500px"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Running Right */}
        <div className="dribbble-marquee-row marquee-right">
          <div className="marquee-track">
            {ROW_2_SHOTS.map((shot, idx) => (
              <a
                key={idx}
                href="https://dribbble.com/faisalkholid"
                target="_blank"
                rel="noreferrer"
                className="marquee-card"
                title={`${shot.title} — View on Dribbble`}
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  unoptimized
                  className="marquee-card-img"
                  sizes="(max-width: 800px) 340px, 500px"
                />
              </a>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {ROW_2_SHOTS.map((shot, idx) => (
              <a
                key={`dup-${idx}`}
                href="https://dribbble.com/faisalkholid"
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                className="marquee-card"
                title={`${shot.title} — View on Dribbble`}
              >
                <Image
                  src={shot.src}
                  alt={shot.title}
                  fill
                  unoptimized
                  className="marquee-card-img"
                  sizes="(max-width: 800px) 340px, 500px"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
