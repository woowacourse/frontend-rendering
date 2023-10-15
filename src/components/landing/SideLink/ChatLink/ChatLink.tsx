"use client";

import { useState } from "react";

import styles from "./ChatLink.module.css";
import ChatIcon from "@/components/common/ChatIcon/ChatIcon";

const OPEN_CHATTING_LINK = "https://open.kakao.com/o/gDt2u0Hf";

const ChatLink = () => {
  const [isHoverIcon, setIsHoverIcon] = useState(false);

  return (
    <div className={styles.chatLinkLayout}>
      <p
        className={`${styles.guideMessage} ${
          isHoverIcon ? styles.guideMessageHover : ""
        }`}
      >
        다른 사람과 함께 학습하고 싶다면?
      </p>
      <a
        className={styles.link}
        href={OPEN_CHATTING_LINK}
        target="_blank"
        onMouseEnter={() => setIsHoverIcon(true)}
        onMouseLeave={() => setIsHoverIcon(false)}
      >
        <ChatIcon color="rgba(34,34,34)" />
      </a>
    </div>
  );
};

export default ChatLink;
