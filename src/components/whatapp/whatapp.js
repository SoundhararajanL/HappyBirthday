import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdjust,
  faCircleNotch,
  faCommentAlt,
  faEllipsisV,
  faChevronLeft,
  faSearch,
  faPaperclip,
  faMicrophone,
  faMapPin,
  faCheckDouble,
  faChevronDown,
  faSmile,
  
} from "@fortawesome/free-solid-svg-icons";

import "./whatapp.css";
import dp from "../images/whatapp/no-dp.jpg"
import surya from "../images/whatapp/surya.jpg"
import care from "../images/whatapp/care.jpg"
import friend from "../images/whatapp/friend.jpg"
import College from "../images/whatapp/collage.jpg"
import rio from "../images/whatapp/rio.jpg"
import bike from "../images/whatapp/bike.jpg"
import trip  from "../images/whatapp/trip.jpg"
import happy  from "../images/whatapp/happy.jpg"






const WhatsappStart = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const chatContainer = document.querySelector(".chat-main");
    if (chatContainer) {
      scrollBottom(chatContainer);
    }
  }, [isChatOpen]);

  function scrollBottom(element) {
    element.scrollTop = element.scrollHeight;
  }

 

  function toggleChat() {
    setIsChatOpen(!isChatOpen);
  }

  function openChatWithFriend() {
    setIsChatOpen(true);
  }

  return (
    <section className="a1-row container">
      <aside className="a1-column aside">
        <div className="a1-row a1-center-items-v a1-justify-items a1-half-padding-tb a1-padding-lr bg-left-panel-header a1-spaced-items border-r">
          <img
            src={dp}
            className="profile-pic"
            alt="Profile Picture"
          />
          <div className="a1-row a1-spaced-items a1-center-items-v icon-color">
           
            <FontAwesomeIcon icon={faCircleNotch} className="icon-color" />
            <FontAwesomeIcon icon={faCommentAlt} className="icon-color" />
            <FontAwesomeIcon icon={faEllipsisV} className="icon-color" />
          </div>
        </div>

        <div >
          <div
            className="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend"
            onClick={openChatWithFriend}
          >
            
            <img
              src={dp}
              className="profile-pic side-friend-profile-pic"
              alt="Profile Picture"
            />
            <div className="a1-column a1-long a1-elastic">
              <div className="a1-row a1-long a1-elastic">
                <span className="a1-long a1-elastic">✨Meenukutty✨</span>
                <span className="timestamp">yesterday</span>
              </div>
              <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                <span className="message-preview">
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
                  <span>Hmm save pannitan..</span>
                </span>
                <div className="a1-row a1-center-items-v a1-half-spaced-items">
                  <div className="a1-row a1-center-items-h a1-center-items-v pin-wrap">
                  <FontAwesomeIcon icon={faMapPin} className="icon-color" />
                  </div>
                  <FontAwesomeIcon icon={faChevronDown} className="icon-color" />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={care}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">care</span>
              <span class="timestamp">Tuesday</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">paathu pathirama iru ..</span>

              <div class="a1-row a1-center-items-v a1-half-spaced-items">
                <div class="a1-row a1-center-items-h a1-center-items-v pin-wrap">
                <FontAwesomeIcon icon={faMapPin} className="icon-color" />
                </div>
               <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
              </div>
            </div>
          </div>
        </div>

        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={surya}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">Love ❤️</span>
              <span class="timestamp">23:44</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">i love you as always</span>

              <div class="a1-row a1-center-items-v a1-half-spaced-items">
                <span class="a1-row a1-center-items-h a1-center-items-v notification">
                  19
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
              </div>
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={happy}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">Happiness</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">eppavum happy ha iru</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>

        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={friend}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">friend</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">nanba..</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={College}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">College group</span>
              <span class="timestamp">23:44</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">hello friends</span>

              <div class="a1-row a1-center-items-v a1-half-spaced-items">
                <span class="a1-row a1-center-items-h a1-center-items-v notification">
                  3
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
              </div>
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={rio}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">rio</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">stress buster</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={bike}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">bikes</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">yemaha r15v3</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={trip}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">Trip group</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">Next week polam ha ?</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
      </aside>
      <main className={`a1-column main ${isChatOpen ? "open-message" : ""}`}>
        <div className="a1-row a1-center-items-v a1-justify-items a1-half-padding-tb a1-padding-lr bg-left-panel-header a1-spaced-items">
          <div className="a1-row a1-center-items-v a1-spaced-items">
            {isChatOpen && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="blue back-arrow"
                onClick={toggleChat}
              />
            )}
            <img
              src={dp}
              className="profile-pic"
              alt="Profile Picture"
            />
            <span>✨Meenukutty✨</span>
          </div>
          <div className="a1-row a1-spaced-items a1-center-items-v icon-color">
            <FontAwesomeIcon icon={faSearch} className="icon-color" />
            <FontAwesomeIcon icon={faPaperclip} className="icon-color" />
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </div>

        <div className="a1-column a1-long a1-elastic">
          <div className="chat-container a1-column a1-long a1-elastic chat-main a1-spaced-items">
            <div class="text text-recieved">
              <p>Hii...</p>
              <span class="timestamp a1-row a1-end">5:12 pm</span>
            </div>
            <div class="text text-recieved">
              <p>I am *******, today ungala pathen green shirt thana?</p>
              <span class="timestamp a1-row a1-end">5:12 pm</span>
            </div>

            <div class="text text-sent">
              <p>Hey hii, enga patha...</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>5:13 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>****** kitta pathen car la poitu irunthinga</p>
              <span class="timestamp a1-row a1-end">5:13 pm</span>
            </div>

            <div class="text text-sent">
              <p>kuptu irunthurukalam la</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>5:13 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Neenga busy a drive pannitu irunthinga</p>
              <span class="timestamp a1-row a1-end">5:24 pm</span>
            </div>

            <div class="text text-sent">
              <p>summa unga vtu valiya ponen</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>5:24 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Hmm</p>
              <span class="timestamp a1-row a1-end">5:25 pm</span>
            </div>

            <div class="text text-sent">
              <p>
                Epdy iruka, mobile eppo vanguna sollavae ella.....
              </p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>5:25 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>leave la than, this is my number</p>
              <span class="timestamp a1-row a1-end">5:30 pm</span>
            </div>
            <div class="text text-sent">
              <p>Hmm save pannitan..</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>5:30 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>
          </div>

          <div className="a1-row a1-spaced-items a1-center-items-v a1-padding bg-left-panel-header">
           <FontAwesomeIcon icon={faSmile} className="icon-color fa-1half" />
            <input
              type="text"
              className="a1-long chat-input"
              placeholder="Type a message"
            />
           <FontAwesomeIcon icon={faMicrophone} className="icon-color" />

          </div>
        </div>
      </main>
    </section>
  );
};

export default WhatsappStart;
