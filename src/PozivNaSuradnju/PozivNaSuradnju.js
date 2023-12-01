import React, { useState } from "react";

export const PozivNaSuradnju = () => {
  const [isFacebookHovered, setIsFacebookHovered] = useState(false);
  const [isYoutubeHovered, setIsYoutubeHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);

  const handleFacebookMouseEnter = () => {
    setIsFacebookHovered(true);
  };

  const handleFacebookMouseLeave = () => {
    setIsFacebookHovered(false);
  };
  const handleYoutubeMouseEnter = () => {
    setIsYoutubeHovered(true);
  };

  const handleYoutubeMouseLeave = () => {
    setIsYoutubeHovered(false);
  };
  const handleInstagramMouseEnter = () => {
    setIsInstagramHovered(true);
  };

  const handleInstagramMouseLeave = () => {
    setIsInstagramHovered(false);
  };

  return (
    <>
      <div className="poziv-na-suradnju-box" id="poziv-na-suradnju-box">
        <div className="info-socials">
          <div className="info-items">
            <h3>Adresa</h3>
            <p>Trg Ljudevita Gaja 7, 31000, Osijek</p>
            <h3>Pronađite događaj i na društvenim mrežama</h3>
          </div>
          <ul className="socials-items">
            <li className="socials-item">
              <a
                href="https://www.facebook.com/millennial.competition22"
                className="socials-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    isFacebookHovered
                      ? process.env.PUBLIC_URL +
                      "/assets/social/facebook-reverse.webp"
                      : process.env.PUBLIC_URL + "/assets/social/facebook.png"
                  }
                  alt="facebook link"
                  className="facebook-link"
                  onMouseEnter={handleFacebookMouseEnter}
                  onMouseLeave={handleFacebookMouseLeave}
                />
              </a>
            </li>
            <li className="socials-item">
              <a
                href="https://www.youtube.com/c/InstitutAndizet"
                className="socials-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    isYoutubeHovered
                      ? process.env.PUBLIC_URL +
                      "/assets/social/youtube-reverse.png"
                      : process.env.PUBLIC_URL + "/assets/social/yt2.png"
                  }
                  alt="youtube link"
                  className="youtube-link"
                  onMouseEnter={handleYoutubeMouseEnter}
                  onMouseLeave={handleYoutubeMouseLeave}
                />
              </a>
            </li>
            <li className="socials-item">
              <a
                href="https://www.instagram.com/millennial.competition/"
                className="socials-link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    isInstagramHovered
                      ? process.env.PUBLIC_URL +
                      "/assets/social/instagram-reverse.png"
                      : process.env.PUBLIC_URL + "/assets/social/instagram.png"
                  }
                  alt="instagram link"
                  className="instagram-link"
                  onMouseEnter={handleInstagramMouseEnter}
                  onMouseLeave={handleInstagramMouseLeave}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
