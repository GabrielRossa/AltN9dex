import { Header } from "../Header";
import XLogo from "../../assets/x-logo.png";
import DiscLogo from "../../assets/disc-logo.png";
import MailLogo from "../../assets/gmail-logo.png";
import TkLogo from "../../assets/tktk-logo.png";

export const ContactSection = () => {
  const links = {
    x: "https://x.com/hokaizmedia",
    tiktok: "https://www.tiktok.com/@hokaizmedia",
    email:
      "mailto:gabrielrossaxdev@gmail.com?subject=Project%20Inquiry&body=Hello%20Gabriel,",
  };

  // ↓ menores no mobile, mantidos no md+
  const itemBase =
    "w-fit h-fit grid place-items-center rounded-md transition-transform hover:scale-110";

  return (
    <section
      id="contact"
      className="w-screen md:h-96 flex flex-col items-center justify-center lg:px-48 px-8 lg:my-12 lg:mb-36 my-24"
      style={{ backgroundColor: "#0B0B0D" }}
    >
      <Header
        title="Contact Me"
        desc="Send me a message and let’s work together!"
      />

      <div className="w-full flex items-center justify-center mt-6">
        {/* ↓ 2 colunas no mobile, 4 no md+ | gaps menores no mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-32">
          {/* X (Twitter) */}
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className={itemBase}
            aria-label="X (Twitter)"
          >
            <img
              src={XLogo}
              alt="X"
              className="h-20 w-20"
              loading="lazy"
            />
          </a>

          {/* Discord */}
          <div
            className={`${itemBase} flex flex-row items-center justify-center relative`}
            aria-label="Discord"
          >
            <img
              src={DiscLogo}
              alt="Discord"
              className="h-20 w-20"
              loading="lazy"
            />
            <p className="absolute -bottom-6 text-white md:block w-fit ">@imgabrielrossa</p>
          </div>

          {/* TikTok */}
          <a
            href={links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className={itemBase}
            aria-label="TikTok"
          >
            <img
              src={TkLogo}
              alt="TikTok"
              className="h-20 w-20"
              loading="lazy"
            />
          </a>

          {/* Gmail */}
          <a href={links.email} className={itemBase} aria-label="Email">
            <img
              src={MailLogo}
              alt="Email"
              className="h-20 w-20"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
