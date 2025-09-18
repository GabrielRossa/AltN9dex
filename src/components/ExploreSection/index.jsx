import React, { useEffect } from "react";

import "./styles.css";
import { Header } from "./../Header/index";
// pode remover os imports de imagens e CardVertical se não usar
import { Link } from "react-router-dom";
import chevronRight from "../../assets/chevron-right-red.svg";

function TikTokIframeCrop({ id, width = 300, viewHeight = 574, offsetTop = 1 }) {
  // viewHeight: altura visível (área que você quer manter)
  // offsetTop: quanto "subir" o iframe para esconder a parte de baixo
  const iframeHeight = viewHeight + offsetTop * 2;

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg"
      style={{ width, height: viewHeight }}
    >
      <iframe
        src={`https://www.tiktok.com/embed/${id}?autoplay=0`}
        title={`tiktok-${id}`}
        scrolling="no"
        className="absolute left-0 w-full"
        style={{ top: -offsetTop, height: iframeHeight, border: 0 }}
        allow="autoplay; encrypted-media; picture-in-picture; clipboard-write; web-share"
        allowFullScreen
      />
    </div>
  );
}


export const ExploreSection = () => {
  useEffect(() => {
    const already = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (!already) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // se já existe, reprocessa os novos embeds
      if (window.tiktokEmbedLoad) {
        window.tiktokEmbedLoad();
      }
    }
  }, []);

  const ids = [
    "7286632998156455174",
    "7252554776255204614",
    "7292194053964303621",
    "7280731071233133829",
    "7261462923741089029",
    "7254962989764185350",
  ];

  return (
    <section
      id="explore"
      className="w-screen h-content flex flex-col items-center"
      style={{ backgroundColor: "#0B0B0D" }}
    >
      <Header
        title="Selected Work"
        desc="Some of my projects as a video editor."
      />

      {/* Linha 1 */}
      <div className="flex md:flex-row flex-col mb-12 w-full md:justify-center items-center gap-5 md:gap-x-10">
        {ids.slice(0, 3).map((id) => (
          <div
            key={id}
            className="flex justify-center rounded-xl overflow-hidden shadow-lg"
          >
            <TikTokIframeCrop id={id} />
          </div>
        ))}
      </div>

      {/* Linha 2 */}
      <div className="flex md:flex-row flex-col mb-12 w-full md:justify-center items-center gap-5 md:gap-x-10">
        {ids.slice(3, 6).map((id) => (
          <div
            key={id}
            className="flex justify-center rounded-xl overflow-hidden shadow-lg"
          >
            <TikTokIframeCrop id={id} />
          </div>
        ))}
      </div>

      {/* Botão opcional */}
      {/* <Link to="/explore" className="flex button-more justify-center align-center" style={{ color: "#F12233" }}>
        <p className="w-fit">VER GALERIA</p>
        <img src={chevronRight} alt="" className="w-6" />
      </Link> */}
    </section>
  );
};
