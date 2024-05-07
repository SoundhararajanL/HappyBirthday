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
            src="https://i.ibb.co/KK52Gp5/aviv-profile.jpg"
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
              src="https://i.ibb.co/fnBBPZp/old-man.jpg"
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
                  <span>Thanks Dad</span>
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
            src="https://i.ibb.co/GnwGL2s/mom.jpg"
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
            src="https://i.ibb.co/0nvDvbw/noam.jpg"
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
                  100
                </span>
                <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
              </div>
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src="https://i.ibb.co/1Tw1wbP/efraim.jpg"
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
            src="https://i.ibb.co/1Tw1wbP/efraim.jpg"
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
            src="https://i.ibb.co/0nvDvbw/noam.jpg"
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
            src="https://i.ibb.co/1Tw1wbP/efraim.jpg"
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
            src="https://i.ibb.co/1Tw1wbP/efraim.jpg"
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
            src="https://i.ibb.co/1Tw1wbP/efraim.jpg"
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
              src="https://i.ibb.co/fnBBPZp/old-man.jpg"
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
              <p>Hey son!</p>
              <span class="timestamp a1-row a1-end">19:12</span>
            </div>
            <div class="text text-recieved">
              <p>Where are you?</p>
              <span class="timestamp a1-row a1-end">19:12</span>
            </div>

            <div class="text text-sent">
              <p>On my way dad</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>19:13</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Great, I'm making burgers today 🍔🍔🍔</p>
              <span class="timestamp a1-row a1-end">19:13</span>
            </div>

            <div class="text text-sent">
              <p>That sounds good 🤤🤤</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>19:13</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>By the way, how's your project going?</p>
              <span class="timestamp a1-row a1-end">19:24</span>
            </div>

            <div class="text text-sent">
              <p>Recreating WhatsApp Web or LogiNow?</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>19:13</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Both!</p>
              <span class="timestamp a1-row a1-end">19:18</span>
            </div>

            <div class="text text-sent">
              <p>
                Both are going very well, LogiNow still needs some fixes and
                minor changes but I hope it will be ready for publish soon!
              </p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>19:13</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Amazing, keep up the good work</p>
              <span class="timestamp a1-row a1-end">19:25</span>
            </div>
            <div class="text text-sent">
              <p>Thanks Dad</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>19:13</span>
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
