import Image from "next/image";
import styles from "./index.module.css";
import { TeamLink } from "@/types/link";
import { generateHttpsUrl } from "@/utils/generateHttpsUrl";
import EmptyLinkPlaceholder from "@/components/link/EmptyLinkPlaceholder";

const linkTableHeaderValues = ["링크명", "이름", "날짜", ""];
const env = process.env.NODE_ENV;

const baseUrl = env === "development" ? "http://localhost:3000" : "";
interface TeamLinksResponse {
  teamLinks: TeamLink[];
}

const fetchTeamLink = async (): Promise<TeamLinksResponse> => {
  const res = await fetch(baseUrl + "/api/team-links", {
    cache: "no-store",
  });

  return res.json();
};

const LinkTable = async () => {
  const { teamLinks } = await fetchTeamLink();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.menuHeader}>
          <h2 className={styles.linkTableTitle}>팀 링크</h2>
          <button
            className={styles.linkAddButton}
            aria-label="새로운 링크 등록하기"
          >
            <Image src="/plus.svg" alt="등록버튼" width="30" height="30" />
          </button>
        </div>
        <div className={styles.tableContainer}>
          <table className={`${styles.tableProperties} ${styles.tableHeader}`}>
            {linkTableHeaderValues.map((value) => (
              <th key={value}>{value}</th>
            ))}
          </table>
          {teamLinks.length > 0 ? (
            <div className={styles.tableBody}>
              <table className={`${styles.table} ${styles.tableProperties}`}>
                {teamLinks.map(({ id, title, url, memberName, updatedAt }) => (
                  <tr key={id}>
                    <td>
                      <a
                        href={generateHttpsUrl(url)}
                        target="_blank"
                        rel="noreferrer"
                        title={title}
                      >
                        {title}
                      </a>
                    </td>
                    <td title={memberName}>{memberName}</td>
                    <td>
                      <time>{updatedAt}</time>
                    </td>
                    <td>
                      <button
                        className={styles.deleteButton}
                        aria-label="링크 삭제하기"
                      >
                        <Image
                          className={styles.deleteSvg}
                          src="/delete.svg"
                          alt="등록버튼"
                          width="30"
                          height="30"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          ) : (
            <EmptyLinkPlaceholder />
          )}
        </div>
      </div>
    </>
  );
};

export default LinkTable;
