import React, { useState } from "react";
import "./videogallery.css";

import Bvid from "./videos/birthday.MP4";
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
import video20 from "./videos/video20.MP4";
import video21 from "./videos/video21.MP4";
import video22 from "./videos/video22.MP4";
import video23 from "./videos/video23.MP4";
import video24 from "./videos/video24.MP4";
import video25 from "./videos/video25.MP4";
import video26 from "./videos/video26.MP4";
import video27 from "./videos/video27.MP4";
import video28 from "./videos/video28.MP4";
import video29 from "./videos/video29.MP4"; 
import video30 from "./videos/video30.MP4";
import video31 from "./videos/video31.MP4";
import video32 from "./videos/video32.MP4";
import video33 from "./videos/video33.MP4";

import bdayvid from "./videos/thumbnail/bdayvid.jpg";
import video1Thumbnail from "./videos/thumbnail/videothumbnail.jpg";
import video2Thumbnail from "./videos/thumbnail/videothumbnail (1).jpg";
import video3Thumbnail from "./videos/thumbnail/videothumbnail (2).jpg";
import video4Thumbnail from "./videos/thumbnail/videothumbnail (3).jpg";
import video5Thumbnail from "./videos/thumbnail/videothumbnail (4).jpg";
import video6Thumbnail from "./videos/thumbnail/videothumbnail (5).jpg";
import video7Thumbnail from "./videos/thumbnail/videothumbnail (6).jpg";
import video8Thumbnail from "./videos/thumbnail/videothumbnail (7).jpg";
import video9Thumbnail from "./videos/thumbnail/videothumbnail (8).jpg";
import video10Thumbnail from "./videos/thumbnail/videothumbnail (9).jpg";
import video11Thumbnail from "./videos/thumbnail/videothumbnail (10).jpg";
import video12Thumbnail from "./videos/thumbnail/videothumbnail (11).jpg";
import video13Thumbnail from "./videos/thumbnail/videothumbnail (12).jpg";
import video14Thumbnail from "./videos/thumbnail/videothumbnail (13).jpg";
import video15Thumbnail from "./videos/thumbnail/videothumbnail (14).jpg";
import video16Thumbnail from "./videos/thumbnail/videothumbnail (15).jpg";
import video17Thumbnail from "./videos/thumbnail/videothumbnail (16).jpg";
import video18Thumbnail from "./videos/thumbnail/videothumbnail (17).jpg";
import video19Thumbnail from "./videos/thumbnail/videothumbnail (18).jpg";
import video20Thumbnail from "./videos/thumbnail/vid20.jpg";
import video21Thumbnail from "./videos/thumbnail/vid21.jpg";
import video22Thumbnail from "./videos/thumbnail/vid22.jpg";
import video23Thumbnail from "./videos/thumbnail/vid23.jpg";
import video24Thumbnail from "./videos/thumbnail/vid24.jpg";
import video25Thumbnail from "./videos/thumbnail/vid25.jpg";
import video26Thumbnail from "./videos/thumbnail/vid26.jpg";
import video27Thumbnail from "./videos/thumbnail/vid27.jpg";
import video28Thumbnail from "./videos/thumbnail/vid28.jpg";
import video29Thumbnail from "./videos/thumbnail/vid29.jpg";
import video30Thumbnail from "./videos/thumbnail/vid30.jpg";
import video31Thumbnail from "./videos/thumbnail/vid31.jpg";
import video32Thumbnail from "./videos/thumbnail/vid32.jpg";
import video33Thumbnail from "./videos/thumbnail/vid33.jpg";

const videos = [
  { src: Bvid, thumbnail: bdayvid, alt: "Video bdayvid" },
  { src: video1, thumbnail: video1Thumbnail, alt: "Video 1" },
  { src: video2, thumbnail: video2Thumbnail, alt: "Video 2" },
  { src: video3, thumbnail: video3Thumbnail, alt: "Video 3" },
  { src: video4, thumbnail: video4Thumbnail, alt: "Video 4" },
  { src: video5, thumbnail: video5Thumbnail, alt: "Video 5" },
  { src: video6, thumbnail: video6Thumbnail, alt: "Video 6" },
  { src: video7, thumbnail: video7Thumbnail, alt: "Video 7" },
  { src: video8, thumbnail: video8Thumbnail, alt: "Video 8" },
  { src: video9, thumbnail: video9Thumbnail, alt: "Video 9" },
  { src: video10, thumbnail: video10Thumbnail, alt: "Video 10" },
  { src: video11, thumbnail: video11Thumbnail, alt: "Video 11" },
  { src: video12, thumbnail: video12Thumbnail, alt: "Video 12" },
  { src: video13, thumbnail: video13Thumbnail, alt: "Video 13" },
  { src: video14, thumbnail: video14Thumbnail, alt: "Video 14" },
  { src: video15, thumbnail: video15Thumbnail, alt: "Video 15" },
  { src: video16, thumbnail: video16Thumbnail, alt: "Video 16" },
  { src: video17, thumbnail: video17Thumbnail, alt: "Video 17" },
  { src: video18, thumbnail: video18Thumbnail, alt: "Video 18" },
  
  { src: video20, thumbnail: video20Thumbnail, alt: "Video 20" },
  { src: video21, thumbnail: video21Thumbnail, alt: "Video 21" },
  { src: video22, thumbnail: video22Thumbnail, alt: "Video 22" },
  { src: video23, thumbnail: video23Thumbnail, alt: "Video 23" },
  { src: video24, thumbnail: video24Thumbnail, alt: "Video 24" },
  { src: video25, thumbnail: video25Thumbnail, alt: "Video 25" },
  { src: video26, thumbnail: video26Thumbnail, alt: "Video 26" },
  { src: video27, thumbnail: video27Thumbnail, alt: "Video 27" },
  { src: video28, thumbnail: video28Thumbnail, alt: "Video 28" },
  { src: video29, thumbnail: video29Thumbnail, alt: "Video 29" },
  { src: video30, thumbnail: video30Thumbnail, alt: "Video 30" },
  { src: video31, thumbnail: video31Thumbnail, alt: "Video 31" },
  { src: video32, thumbnail: video32Thumbnail, alt: "Video 32" },
  { src: video33, thumbnail: video33Thumbnail, alt: "Video 33" },
  { src: video19, thumbnail: video19Thumbnail, alt: "Video 19" },
];

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
        {videos.map((video, index) => (
          <div className="single-video" key={index}>
            <figure onClick={() => openPopup(video.src)}>
              <img src={video.thumbnail} alt={video.alt} />
            </figure>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="video-popup-overlay" onClick={closePopup}>
          <div className="video-popup">
            <button onClick={closePopup} className="close-btn">
              Close
            </button>
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
