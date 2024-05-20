import React, { useState } from "react";
import "./videogallery.css";

import video1 from "./videos/video1.MP4";
import video2 from "./videos/video2.MP4";
import video3 from "./videos/video3.MP4";
import video4 from "./videos/video4.MP4";
import video5 from "./videos/video5.MP4";
import video6 from "./videos/video6.MP4";
import video7 from "./videos/video7.MP4";
import video8 from "./videos/video8.MP4";
import video9 from "./videos/video9.MP4";
import video10 from "./videos/video10.MP4";
import video11 from "./videos/video11.MP4";
import video12 from "./videos/video12.MP4";
import video13 from "./videos/video13.MP4";
import video14 from "./videos/video14.MP4";
import video15 from "./videos/video15.MP4";
import video16 from "./videos/video16.MP4";
import video17 from "./videos/video17.MP4";
import video18 from "./videos/video18.MP4";
import video19 from "./videos/video19.MP4";



import video1Thumbnail from "./videos/thumbnail/videothumbnail.jpg";
import video2Thumbnail from "./videos/thumbnail/videothumbnail (1).jpg";
import video3Thumbnail from "./videos/thumbnail/videothumbnail (2).jpg"
import video4Thumbnail from "./videos/thumbnail/videothumbnail (3).jpg";
import video5Thumbnail from "./videos/thumbnail/videothumbnail (4).jpg";
import video6Thumbnail from "./videos/thumbnail/videothumbnail (5).jpg";
import video7Thumbnail from "./videos/thumbnail/videothumbnail (6).jpg";
import video8Thumbnail from "./videos/thumbnail/videothumbnail (7).jpg"
import video9Thumbnail from "./videos/thumbnail/videothumbnail (8).jpg";
import video10Thumbnail from "./videos/thumbnail/videothumbnail (9).jpg";
import video11Thumbnail from "./videos/thumbnail/videothumbnail (10).jpg";
import video12Thumbnail from "./videos/thumbnail/videothumbnail (11).jpg";
import video13Thumbnail from "./videos/thumbnail/videothumbnail (12).jpg"
import video14Thumbnail from "./videos/thumbnail/videothumbnail (13).jpg";
import video15Thumbnail from "./videos/thumbnail/videothumbnail (14).jpg";
import video16Thumbnail from "./videos/thumbnail/videothumbnail (15).jpg";
import video17Thumbnail from "./videos/thumbnail/videothumbnail (16).jpg";
import video18Thumbnail from "./videos/thumbnail/videothumbnail (17).jpg"
import video19Thumbnail from "./videos/thumbnail/videothumbnail (18).jpg";


const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openPopup = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <div className="gallery">
        <div className="single-video">
          <figure onClick={() => openPopup(video1)}>
            <img src={video1Thumbnail} alt="Video 1" />
          </figure>
        </div>
        <div className="single-video">
          <figure onClick={() => openPopup(video2)}>
            <img src={video2Thumbnail} alt="Video 2" />
          </figure>
        </div>
        <div className="single-video">
          <figure onClick={() => openPopup(video3)}>
            <img src={video3Thumbnail} alt="Video 3" />
          </figure>
        </div>
        <div className="single-video">
          <figure onClick={() => openPopup(video4)}>
            <img src={video4Thumbnail} alt="Video 4" />
          </figure>
        </div>
        <div className="single-video">
          <figure onClick={() => openPopup(video5)}>
            <img src={video5Thumbnail} alt="Video 5" />
          </figure>
        </div>
        <div className="single-video">
          <figure onClick={() => openPopup(video6)}>
            <img src={video6Thumbnail} alt="Video 6" />
          </figure>
        </div>

        

        <div className="single-video">
          <figure onClick={() => openPopup(video7)}>
            <img src={video7Thumbnail} alt="Video 7" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video8)}>
            <img src={video8Thumbnail} alt="Video 8" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video9)}>
            <img src={video9Thumbnail} alt="Video 9" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video10)}>
            <img src={video10Thumbnail} alt="Video 10" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video11)}>
            <img src={video11Thumbnail} alt="Video 11" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video12)}>
            <img src={video12Thumbnail} alt="Video 12" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video13)}>
            <img src={video13Thumbnail} alt="Video 13" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video14)}>
            <img src={video14Thumbnail} alt="Video 14" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video15)}>
            <img src={video15Thumbnail} alt="Video 15" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video16)}>
            <img src={video16Thumbnail} alt="Video 16" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video17)}>
            <img src={video17Thumbnail} alt="Video 17" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video18)}>
            <img src={video18Thumbnail} alt="Video 18" />
          </figure>
        </div> <div className="single-video">
          <figure onClick={() => openPopup(video19)}>
            <img src={video19Thumbnail} alt="Video 19" />
          </figure>
        </div>

      </div>
      {selectedVideo && (
        <div className="video-popup-overlay" onClick={closePopup}>
          <div className="video-popup">
            <button onClick={closePopup} className="close-btn">Close</button>
            <iframe
              src={selectedVideo}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
