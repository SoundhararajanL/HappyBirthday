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
  faCheck,
  
} from "@fortawesome/free-solid-svg-icons";

import "./whatapp.css";
import dp from "../images/whatapp/no-dp.jpg"
import breakup from "../images/whatappEnd/breakup.jpg"
import alone from "../images/whatappEnd/alone.jpg"
import sad from "../images/whatappEnd/sad.jpg"
import depression from "../images/whatappEnd/depression.jpg"
import efforts from "../images/whatappEnd/efforts.jpg"
import fake from "../images/whatappEnd/fake.jpg"
import feelings  from "../images/whatappEnd/feelings.jpg"
import missyou  from "../images/whatappEnd/missyou.jpg"






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
                <span className="timestamp">today</span>
              </div>
              <div className="a1-row a1-center-items-v a1-justify-items a1-long">
                <span className="message-preview">
                <FontAwesomeIcon icon={faCheck} className="gray" />
                  <span>I'll never leave you...</span>
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
            src={breakup}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">breakup</span>
              <span class="timestamp">Tuesday</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">Don't disturb me..</span>

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
            src={alone}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">alone</span>
              <span class="timestamp">23:44</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">end of the day you are alone</span>

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
            src={sad}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">sad</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">inside heart</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>

        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={depression}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">depression</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">everyday..</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={efforts}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">efforts</span>
              <span class="timestamp">23:44</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">useless..</span>

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
            src={fake}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">fake</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">fake smile...</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={feelings}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">feelings</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">missing my self..</span>
             <FontAwesomeIcon icon={faChevronDown} className="icon-color" />
            </div>
          </div>
        </div>
        <div class="a1-row a1-center-items-v a1-padding a1-justify-items a1-spaced-items border-b friend">
          <img
            src={missyou}
            class="profile-pic side-friend-profile-pic"
            alt="Profile Picture"
          />
          <div class="a1-column a1-long a1-elastic">
            <div class="a1-row a1-long a1-elastic">
              <span class="a1-long a1-elastic">miss you</span>
              <span class="timestamp">23:34</span>
            </div>
            <div class="a1-row a1-center-items-v a1-justify-items a1-long">
              <span class="message-preview">every time.....</span>
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
          <div class="text text-sent">
              <p>Hi...enna panra</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>10:15 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>
            <div class="text text-recieved">
              <p>Who are you ...</p>
              <span class="timestamp a1-row a1-end">10:50 pm</span>
            </div>
            <div class="text text-recieved">
              <p>don't disturb me...pls</p>
              <span class="timestamp a1-row a1-end">10:50 pm</span>
            </div>

            <div class="text text-sent">
              <p>Hey .. enachi. en epdy pesura ? </p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>10:51 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Eppo ungaluku ena problem , pls disturb panathinga..</p>
              <span class="timestamp a1-row a1-end">11:16 pm</span>
            </div>

            <div class="text text-sent">
              <p>enachi ma.. en epdy pesura , ethachi kovama ?</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>11:20 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>Illa .. unga work parunga ini disturb panathinga</p>
              <span class="timestamp a1-row a1-end">11:50 pm</span>
            </div>

            <div class="text text-sent">
              <p>hey .. thidirnu epdy sona.. ena panrathu edhachi problem ha vtula </p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>11:51 pm</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>first na edhukku ungakita pesanum bye ..</p>
              <span class="timestamp a1-row a1-end">1:00 am</span> 
            </div>

            <div class="text text-sent">
              <p>
                pls , edhachi problem na sollu.. pesama irukatha .. cl me!!
              </p> 
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:10 am</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>

            <div class="text text-recieved">
              <p>unga kita pesa istam illa. bye ..</p> 
              <span class="timestamp a1-row a1-end">1:20 am</span>
            </div>
            <div class="text text-recieved">
              <p>block panren bye ..</p>
              <span class="timestamp a1-row a1-end">1:20 am</span> 
            </div>
            <div class="text text-sent">
              <p>hey....😢</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:20 am</span>
                <FontAwesomeIcon icon={faCheckDouble} className="blue" />
              </div>
            </div>
            <div class="text text-sent">
              <p>yen Block panita 😔</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:21 am</span>
                <FontAwesomeIcon icon={faCheck} className="gray" />
              </div>
            </div>
            <div class="text text-sent">
              <p>hello.. epdy pathilaye pona epdy ??</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp"> 
                <span>1:21 am</span>
                <FontAwesomeIcon icon={faCheck} className="gray" />
              </div>
            </div>
            <div class="text text-sent">
              <p>Miss you...😔</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:21 am</span>
                <FontAwesomeIcon icon={faCheck} className="gray" />
              </div>
            </div>
            <div class="text text-sent">
              <p>block panita msg pogathunu tharinjum .. manasu keka matikuthuuuu...luv u</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:22 am</span>
                <FontAwesomeIcon icon={faCheck} className="gray" />
              </div>
            </div>
            <div class="text text-sent">
              <p>I'm Still waiting for u ..miss you and love you</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:23 am</span>
                <FontAwesomeIcon icon={faCheck} className="gray" />
              </div>
            </div>
            <div class="text text-sent">
              <p>I'll never leave you...</p>
              <div class="a1-row a1-end a1-half-spaced-items timestamp">
                <span>1:30 am</span>
                <FontAwesomeIcon icon={faCheck} className="gray" />
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
