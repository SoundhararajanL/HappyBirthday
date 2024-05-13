import React from 'react';
import "./gallery.css"
import fivestar from  "../images/gallery/5star.png"
import end from "../images/gallery/end.jpg"
import brokenglass from "../images/gallery/brokenglass.png"
import butterfly from "../images/gallery/butterfly.png"
import ear from "../images/gallery/ear.png"
import eye from "../images/gallery/eye.png"
import halfheart from "../images/gallery/halfheart.jpg"
import heart from "../images/gallery/heart.png"
import leg from "../images/gallery/leg.png"
import queen from "../images/gallery/queen.png"
import rose from "../images/gallery/rose.png"
import selfie from "../images/gallery/selfie.png"
import tshirt from "../images/gallery/t-shirt.png"

// 13-may-24
import depression from "../images/gallery/depression.jpg"
import dog from "../images/gallery/dog.jpg"
import marsmellow from "../images/gallery/marsmellow.jpg"


function Gallery() {
  return (
    <div>
        <div className="image-grid">
          <div className="image-row">
            <div className="image image-01" style={{ backgroundImage: `url(${fivestar})` }}></div>  
            <div className="image image-02" style={{ backgroundImage: `url(${end})` }}></div>  
            <div className="image image-03" style={{ backgroundImage: `url(${brokenglass})` }}></div>  
          </div> 
          <div className="image-row">
            <div className="image image-04" style={{ backgroundImage: `url(${butterfly})` }}></div>  
            <div className="image image-05" style={{ backgroundImage: `url(${ear})` }}></div>  
          </div>  
          <div className="image-row">
            <div className="image image-06" style={{ backgroundImage: `url(${eye})` }}></div>  
            <div className="image image-07" style={{ backgroundImage: `url(${halfheart})` }}></div>  
            <div className="image image-08" style={{ backgroundImage: `url(${heart})` }}></div>  
            <div className="image image-09" style={{ backgroundImage: `url(${leg})` }}></div>  
          </div>  
          <div className="image-row">
            <div className="image image-10" style={{ backgroundImage: `url(${queen})` }}></div>  
            <div className="image image-11" style={{ backgroundImage: `url(${rose})` }}></div>  
            <div className="image image-12" style={{ backgroundImage: `url(${selfie})` }}></div>  
            <div className="image image-13" style={{ backgroundImage: `url(${tshirt})` }}></div>  
          </div> 

          <div className="image-row">
            <div className="image image-10" style={{ backgroundImage: `url(${depression})` }}></div>  
            <div className="image image-11" style={{ backgroundImage: `url(${dog})` }}></div>  
            <div className="image image-12" style={{ backgroundImage: `url(${marsmellow})` }}></div>  
            
          </div> 
      </div>  
    </div>
  );
}

export default Gallery;
