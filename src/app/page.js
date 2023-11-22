"use client";

import { useState } from "react";
import Image from "next/image";
import "@styles/home.css";

export default function Home() {
  const [nama, setNama] = useState("Audy Febryanti");
  const [inputValue, setInputValue] = useState("");

  const handleGantiNama = () => {
    setNama(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      handleGantiNama();
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
            <Image
              src="/assets/profil.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
            />
          </div>
          <div className="content-bio-header-banner">
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              <p>D121211005</p>
              <p>What's this... emotion? I don't understand.</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <div className="cta-input">
            <input
              name="inputName"
              placeholder="Masukkan nama"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div
            className={`cta-button ${inputValue.trim() === "" ? "cta-button-disabled" : "cta-button-enabled"}`}
            onClick={inputValue.trim() !== "" ? handleGantiNama : null}
            disabled={inputValue.trim() === ""}
          >
            <p>{inputValue.trim() === "" ? "Disabled" : "Submit"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
