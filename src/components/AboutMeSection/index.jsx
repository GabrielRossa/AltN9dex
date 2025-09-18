import { Header } from "../Header";
import "./styles.css";
import foto from "../../assets/profile-me.jpg"; // substitua pelo caminho da sua foto

export const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="w-screen md:h-full flex flex-col items-center lg:px-48 px-8 lg:my-12 lg:mb-36 my-24"
      style={{ backgroundColor: "#0B0B0D"}}
    >
      <Header title="About Me" desc="" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
        {/* Foto */}
        <div className="flex-shrink-0">
          <img
            src={foto}
            alt="Gabriel Rossa"
            className="max-w-xs md:max-w-sm shadow-lg md:w-96"
          />
        </div>

        {/* Texto */}
        <div className="text-white max-w-lg text-center md:text-left leading-relaxed">
          <p className="w-full text-xl font-light">
            I’m Gabriel Rossa, aka Hokaiz, 22
            years old, and I’ve been editing videos for over 8 years. My
            background ranges from short-form content that reached{" "}
            150k followers on TikTok to full YouTube edits and
            branded projects.
          </p>
        </div>
      </div>
    </section>
  );
};
