import React, { useState } from "react";
import "./songs.css";

import song1 from "./SongVideos/video1.MP4";
import song2 from "./SongVideos/video2.MP4";
import song3 from "./SongVideos/video3.MP4";
import song4 from "./SongVideos/video4.MP4";
import song5 from "./SongVideos/video5.MP4";
import song6 from "./SongVideos/video6.MP4";
import song7 from "./SongVideos/video7.MP4";
import song8 from "./SongVideos/video8.MP4";
import song9 from "./SongVideos/video9.MP4";
import song10 from "./SongVideos/video10.MP4";
import song11 from "./SongVideos/video11.MP4";
import song12 from "./SongVideos/video12.MP4";
import song13 from "./SongVideos/video13.MP4";
import song14 from "./SongVideos/video14.MP4";
import song15 from "./SongVideos/video15.MP4";
import song16 from "./SongVideos/video16.MP4";
import song17 from "./SongVideos/video17.MP4";
import song18 from "./SongVideos/video18.MP4";
import song19 from "./SongVideos/video19.MP4";
import song20 from "./SongVideos/video20.MP4";
import song21 from "./SongVideos/video21.MP4";
import song22 from "./SongVideos/video22.MP4";
import song23 from "./SongVideos/video23.MP4";
import song24 from "./SongVideos/video24.MP4";
import song25 from "./SongVideos/video25.MP4";
import song26 from "./SongVideos/video26.MP4";
import song27 from "./SongVideos/video27.MP4";
import song28 from "./SongVideos/video28.MP4";
import song29 from "./SongVideos/video29.MP4";
import song30 from "./SongVideos/video30.MP4";
import song31 from "./SongVideos/video31.MP4";
import song32 from "./SongVideos/video32.MP4";

import song1Thumbnail from "./SongVideos/Templates/videothumbnail.jpg";
import song2Thumbnail from "./SongVideos/Templates/videothumbnail (1).jpg";
import song3Thumbnail from "./SongVideos/Templates/videothumbnail (2).jpg";
import song4Thumbnail from "./SongVideos/Templates/videothumbnail (3).jpg";
import song5Thumbnail from "./SongVideos/Templates/videothumbnail (4).jpg";
import song6Thumbnail from "./SongVideos/Templates/videothumbnail (5).jpg";
import song7Thumbnail from "./SongVideos/Templates/videothumbnail (6).jpg";
import song8Thumbnail from "./SongVideos/Templates/videothumbnail (7).jpg";
import song9Thumbnail from "./SongVideos/Templates/videothumbnail (8).jpg";
import song10Thumbnail from "./SongVideos/Templates/videothumbnail (9).jpg";
import song11Thumbnail from "./SongVideos/Templates/videothumbnail (10).jpg";
import song12Thumbnail from "./SongVideos/Templates/videothumbnail (11).jpg";
import song13Thumbnail from "./SongVideos/Templates/videothumbnail (12).jpg";
import song14Thumbnail from "./SongVideos/Templates/videothumbnail (13).jpg";
import song15Thumbnail from "./SongVideos/Templates/videothumbnail (14).jpg";
import song16Thumbnail from "./SongVideos/Templates/videothumbnail (15).jpg";
import song17Thumbnail from "./SongVideos/Templates/videothumbnail (16).jpg";
import song18Thumbnail from "./SongVideos/Templates/videothumbnail (17).jpg";
import song19Thumbnail from "./SongVideos/Templates/videothumbnail (18).jpg";
import song20Thumbnail from "./SongVideos/Templates/videothumbnail (19).jpg";
import song21Thumbnail from "./SongVideos/Templates/videothumbnail (20).jpg";
import song22Thumbnail from "./SongVideos/Templates/videothumbnail (21).jpg";
import song23Thumbnail from "./SongVideos/Templates/videothumbnail (22).jpg";
import song24Thumbnail from "./SongVideos/Templates/videothumbnail (23).jpg";
import song25Thumbnail from "./SongVideos/Templates/videothumbnail (24).jpg";
import song26Thumbnail from "./SongVideos/Templates/videothumbnail (25).jpg";
import song27Thumbnail from "./SongVideos/Templates/videothumbnail (26).jpg";
import song28Thumbnail from "./SongVideos/Templates/videothumbnail (27).jpg";
import song29Thumbnail from "./SongVideos/Templates/videothumbnail (28).jpg";
import song30Thumbnail from "./SongVideos/Templates/videothumbnail (29).jpg";
import song31Thumbnail from "./SongVideos/Templates/videothumbnail (30).jpg";
import song32Thumbnail from "./SongVideos/Templates/videothumbnail (31).jpg";

const videos = [
  { src:song1, thumbnail:song1Thumbnail, alt: "Video 1" },
  { src:song2, thumbnail:song2Thumbnail, alt: "Video 2" },
  { src:song3, thumbnail:song3Thumbnail, alt: "Video 3" },
  { src:song4, thumbnail:song4Thumbnail, alt: "Video 4" },
  { src:song5, thumbnail:song5Thumbnail, alt: "Video 5" },
  { src:song6, thumbnail:song6Thumbnail, alt: "Video 6" },
  { src:song7, thumbnail:song7Thumbnail, alt: "Video 7" },
  { src:song8, thumbnail:song8Thumbnail, alt: "Video 8" },
  { src:song9, thumbnail:song9Thumbnail, alt: "Video 9" },
  { src:song10, thumbnail:song10Thumbnail, alt: "Video 10" },
  { src:song11, thumbnail:song11Thumbnail, alt: "Video 11" },
  { src:song12, thumbnail:song12Thumbnail, alt: "Video 12" },
  { src:song13, thumbnail:song13Thumbnail, alt: "Video 13" },
  { src:song14, thumbnail:song14Thumbnail, alt: "Video 14" },
  { src:song15, thumbnail:song15Thumbnail, alt: "Video 15" },
  { src:song16, thumbnail:song16Thumbnail, alt: "Video 16" },
  { src:song17, thumbnail:song17Thumbnail, alt: "Video 17" },
  { src:song18, thumbnail:song18Thumbnail, alt: "Video 18" },
  { src:song19, thumbnail:song19Thumbnail, alt: "Video 19" },
  { src:song20, thumbnail:song20Thumbnail, alt: "Video 20" },
  { src:song21, thumbnail:song21Thumbnail, alt: "Video 21" },
  { src:song22, thumbnail:song22Thumbnail, alt: "Video 22" },
  { src:song23, thumbnail:song23Thumbnail, alt: "Video 23" },
  { src:song24, thumbnail:song24Thumbnail, alt: "Video 24" },
  { src:song25, thumbnail:song25Thumbnail, alt: "Video 25" },
  { src:song26, thumbnail:song26Thumbnail, alt: "Video 26" },
  { src:song27, thumbnail:song27Thumbnail, alt: "Video 27" },
  { src:song28, thumbnail:song28Thumbnail, alt: "Video 28" },
  { src:song29, thumbnail:song29Thumbnail, alt: "Video 29" },
  { src:song30, thumbnail:song30Thumbnail, alt: "Video 30" },
  { src:song31, thumbnail:song31Thumbnail, alt: "Video 31" },
  { src:song32, thumbnail:song32Thumbnail, alt: "Video 32" },
];

const Songs = () => {
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

export default Songs;
