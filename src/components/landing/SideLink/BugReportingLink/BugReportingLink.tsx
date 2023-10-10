"use client";

import { useState } from "react";

import styles from "./BugReportingLink.module.css";
import ReportIcon from "@/components/common/ReportIcon/ReportIcon";


const BUG_REPORTING_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdwvz3y9xYc9PHCLw1LiaLB8TGfGao91cVs_NwERHSV9c5Mfg/viewform";

const BugReportingLink = () => {
  const [isHoverIcon, setIsHoverIcon] = useState(false);

  return (
    <div className={styles.bugReportingLayout}>
      <p
        className={`${styles.guideMessage} ${
          isHoverIcon ? styles.guideMessageHover : ""
        }`}
      >
        불편사항 피드백하기
      </p>
      <a
        className={styles.link}
        href={BUG_REPORTING_LINK}
        target="_blank"
        onMouseEnter={() => setIsHoverIcon(true)}
        onMouseLeave={() => setIsHoverIcon(false)}
      >
        <ReportIcon color="rgba(34,34,34)" />
      </a>
    </div>
  );
};

export default BugReportingLink;
