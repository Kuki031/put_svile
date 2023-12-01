import React, { useState } from "react";
import axios from "axios";

export const QuoteGen = () => {
  const [isPoloModalOpen, setIsPoloModalOpen] = useState(false);
  const [isKhanModalOpen, setIsKhanModalOpen] = useState(false);

  const [poloFact, setPoloFact] = useState("");
  const [khanFact, setKhanFact] = useState("");

  const quoteLink = "https://put-svile-backend.onrender.com/api/v1/quotes";

  const randNumber = () => Math.floor(Math.random() * 30);
  const index = randNumber();

  const getPoloQuote = async () => {
    try {
      const response = await axios.get(`${quoteLink}?isAbout=marco-polo`);
      setPoloFact(response.data.facts[index].fact);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const getKhanQuote = async () => {
    try {
      const response = await axios.get(`${quoteLink}?isAbout=kublai-khan`);
      setKhanFact(response.data.facts[index].fact);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handlePoloClick = () => {
    getPoloQuote();
    setTimeout(() => {
      setIsPoloModalOpen(true);
    }, 400);
  };

  const handleKhanClick = () => {
    getKhanQuote();
    setTimeout(() => {
      setIsKhanModalOpen(true);
    }, 400);
  };

  return (
    <>
      <section className="quote-boxes">
        <img
          className="quote-img"
          src={`${process.env.PUBLIC_URL + "/assets/krimg/marko.jpg"}`}
          alt="Marko Polo"
          onClick={handlePoloClick}
        ></img>
        <img
          className="quote-img"
          src={`${process.env.PUBLIC_URL + "/assets/krimg/kubla.jpg"}`}
          alt="Kublaj Khan"
          onClick={handleKhanClick}
        ></img>
      </section>
      <div className={isPoloModalOpen ? "modal polo" : "modal-closed"}>
        <h2>{poloFact}</h2>
        <button
          className="close-button"
          onClick={() => setIsPoloModalOpen(false)}
        >
          X
        </button>
      </div>

      <div className={isKhanModalOpen ? "modal khan" : "modal-closed"}>
        <h2>{khanFact}</h2>
        <button
          className="close-button"
          onClick={() => setIsKhanModalOpen(false)}
        >
          X
        </button>
      </div>
    </>
  );
};
