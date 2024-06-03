import React, { useState } from "react";
import "./book.css";
import { NavLink } from "react-router-dom";


function Book() {
  const [currentPage, setCurrentPage] = useState("page-1");

  const handleChangePage = (e) => {
    setCurrentPage(e.target.id);
  };

  return (
    <div
   
    > 
      <div className="book">
        <input
          type="radio"
          name="page"
          id="page-1"
          checked={currentPage === "page-1"}
          onChange={handleChangePage}
        />
        <label className="page cover" htmlFor="page-3">
          <h1>For you Meenukutty</h1>
        </label>
        <label className="page cover" htmlFor="page-1"></label>
        <input
          type="radio"
          name="page"
          id="page-3"
          checked={currentPage === "page-3"}
          onChange={handleChangePage}
        />
        <label className="page" htmlFor="page-5">
          <h2>24/4/2024</h2>
          <p>
            இதயத்தில் நீ இருந்தால் மறந்து விடலாம்.. ஆனால் இதயமே நீயாக இருந்தால்
            எப்படி மறப்பது?.
          </p>
        </label>
        <label className="page" htmlFor="page-3">
          <p>
            விட்டு விட்டு துடிக்கும் என் இதயத்தில் விடாமல் துடிக்கும் உன்
            நினைவுகள்
          </p>
        </label>
        <input
          type="radio"
          name="page"
          id="page-5"
          checked={currentPage === "page-5"}
          onChange={handleChangePage}
        />
        <label className="page" htmlFor="page-7">
          <p>
            உனக்காக வாழ ஆரம்பித்து விட்டேன் என் வாழ்க்கையே நீயென்று உணர்ந்து
            கொண்டதால்
          </p>
        </label>
        <label className="page" htmlFor="page-5">
          <p>
            அன்றிரவு தூங்காமல் உன்னோடு பேசி சிரித்தேன்... இன்றிரவு தூங்காமல்
            உன்னோடு பேசியதை நினைத்து அழுகிறேன்
          </p>
        </label>
        <input
          type="radio"
          name="page"
          id="page-7"
          checked={currentPage === "page-7"}
          onChange={handleChangePage}
        />
        <label className="page" htmlFor="page-9">
          <p>
            நீ என்னை நினைவில் வைத்திருந்தால், இவ்வுலகமே மறந்தாலும் எனக்கு
            கவலையில்லை.
          </p>
        </label>

        <label className="page" htmlFor="page-7">
          
          <p>
          பிரிவும் கோபமும் ஒருவரை மறப்பதற்க்கு  அல்ல​ அவர்களை அதிகமாக​ நினைப்பதற்கே....
          </p>
        </label>
        <input
          type="radio"
          name="page"
          id="page-9"
          checked={currentPage === "page-9"}
          onChange={handleChangePage}
        />

        {/* add */}
        <label className="page" htmlFor="page-11">
          <p>
            மிகப்பெரிய வலி நான் உன்னுடன் பேச நினைக்கையில் பேச முடியாமல்
            இருப்பதே..
          </p>
        </label>
        <label className="page" htmlFor="page-9">
          <p>
            வலிகள் தந்து சென்றவளே உன் நினைவுகளை மறக்கா செய்தது ஏனோ..! விழிமேல்
            என்றும் ஈரம்...
          </p>
        </label>
        <input
          type="radio"
          name="page"
          id="page-11"
          checked={currentPage === "page-11"}
          onChange={handleChangePage}
        />

        <label className="page" htmlFor="page-13">
          <p>
            காதலில் காத்திருப்பது கூட​ சுகம் தான் அதற்காக​ அடுத்த​ ஐென்மம் வரை
            காத்திருக்க​ விடாதே...
          </p>
        </label>
        <label className="page" htmlFor="page-11">
        <p>காயங்களும் மாயமாகும் என்னருகில் நீ இருந்தால்</p>
          <p>The end.</p>
        </label>
        <input
          type="radio"
          name="page"
          id="page-13"
          checked={currentPage === "page-13"}
          onChange={handleChangePage}
        />

        <input
          type="radio"
          name="page"
          id="page-13"
          checked={currentPage === "page-13"}
          onChange={handleChangePage}
        />
        <label className="page cover" htmlFor="page-15"></label>
        <label className="page cover" htmlFor="page-13"></label>
        <input
          type="radio"
          name="page"
          id="page-15"
          checked={currentPage === "page-15"}
          onChange={handleChangePage}
        />
      </div>

     
    </div>
  );
}

export default Book;
