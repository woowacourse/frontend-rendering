import styles from "./styles.module.scss";

interface ProfileImageProps extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
  imageUrl: string;
}

function ProfileImage({
  name = "셀럽",
  imageUrl,
  ...props
}: ProfileImageProps) {
  return (
    <img
      className={styles.profile}
      alt={`${name} 프로필`}
      src={imageUrl}
      {...props}
    />
  );
}

export default ProfileImage;
