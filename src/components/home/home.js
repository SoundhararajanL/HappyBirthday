import React, { useEffect } from "react";
import "./home.css";
import Navbar from "../nav/navbar";

function HeartAnimation() {
  useEffect(() => {
    const love = setInterval(() => {
      const r_num = Math.floor(Math.random() * 40) + 1;
      const r_size = Math.floor(Math.random() * 65) + 10;
      const r_left = Math.floor(Math.random() * 100) + 1;
      const r_bg = Math.floor(Math.random() * 25) + 100;
      const r_time = Math.floor(Math.random() * 5) + 5;

      const heart1 = document.createElement("div");
      heart1.classList.add("heart");
      heart1.style.width = `${r_size}px`;
      heart1.style.height = `${r_size}px`;
      heart1.style.left = `${r_left}%`;
      heart1.style.background = `rgba(255, ${r_bg - 25}, ${r_bg}, 1)`;
      heart1.style.animation = `love ${r_time}s ease`;
      document.querySelector(".bg_heart").appendChild(heart1);

      const heart2 = document.createElement("div");
      heart2.classList.add("heart");
      heart2.style.width = `${r_size - 10}px`;
      heart2.style.height = `${r_size - 10}px`;
      heart2.style.left = `${r_left + r_num}%`;
      heart2.style.background = `rgba(255, ${r_bg - 25}, ${r_bg + 25}, 1)`;
      heart2.style.animation = `love ${r_time + 5}s ease`;
      document.querySelector(".bg_heart").appendChild(heart2);

      document.querySelectorAll(".heart").forEach((heart) => {
        const top = parseFloat(heart.style.top || 0);
        const width = parseFloat(heart.style.width || 0);
        if (top <= -100 || width >= 150) {
          heart.remove();
        }
      });
    }, 500);

    return () => clearInterval(love);
  }, []);

  return null;
}

function Home() {
  return (
    <div>
      <div className="bg_heart">
        <Navbar />
      </div>
      <div className="name">
        <h2>Happy Birthday</h2>
        <h1>
          <span className="mah">❤</span>Maa...<span className="mah">❤</span>
        </h1>
        <p>
          My dear mine, you know how much I always wish to give you the best of
          what the world can offer. This day is no different. So I wish you a
          very happy birthday and I promise to love you forever!
        </p>
        <img
          src="https://i.pinimg.com/originals/6c/48/1e/6c481e95cab0ac618d2cd1f54d385229.png"
          alt="Happy Birthday"
        />
        <p></p>
      </div>

      <HeartAnimation />
    </div>
  );
}

export default Home;
