import React, { useState } from "react";
import { Typography, Rating } from "@mui/material";
import axios from "axios";

export const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    // Prepare data to be sent in the POST request
    const postData = {
      rating: rating,
      comment: comment,
    };

    // Make a POST request using Axios
    if (!postData.rating || !postData.comment) return console.log("Cannot submit empty review.");
    axios
      .post("https://put-svile-backend.onrender.com/api/v1/reviews", postData)
      .then((response) => {
        console.log("Review submitted successfully:", response.data);

      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        // Handle error accordingly
      });
  };
  return (
    <div>
      <form className="rating-form">
        <Typography component="legend" className="legenda">
          <h2>Koliko vam se svidjela ova stranica?</h2>
        </Typography>
        <div className="">
          <Rating
            size="large"
            className="ocjena"
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />
          <div className="comment-section">
            <label htmlFor="komentar">Imate li kakav komentar?</label>
            <input
              type="text"
              id="komentar"
              placeholder="Komentar unesite ovdje"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <input
          type="button"
          value="Pošalji"
          onClick={handleSubmit}
          className="send-button"
        />
      </form>
    </div>
  );
};

