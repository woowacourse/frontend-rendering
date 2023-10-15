import BugReportingLink from "./BugReportingLink/BugReportingLink";
import ChatLink from "./ChatLink/ChatLink";
import styles from "./SideLink.module.css";

const SideLink = () => {
  return (
    <div className={styles.sideLinkLayout}>
      <ChatLink />
      <BugReportingLink />
    </div>
  );
};

export default SideLink;
