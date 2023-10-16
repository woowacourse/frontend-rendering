import { ComponentPropsWithoutRef } from 'react';

type Props = {
  color: string;
};

const CalenderIcon = ({
  color,
  ...rest
}: Props & ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      {...rest}
    >
      <path
        d="M23.75 5H21.25V3.75C21.25 3.41848 21.1183 3.10054 20.8839 2.86612C20.6495 2.6317 20.3315 2.5 20 2.5C19.6685 2.5 19.3505 2.6317 19.1161 2.86612C18.8817 3.10054 18.75 3.41848 18.75 3.75V5H11.25V3.75C11.25 3.41848 11.1183 3.10054 10.8839 2.86612C10.6495 2.6317 10.3315 2.5 10 2.5C9.66848 2.5 9.35054 2.6317 9.11612 2.86612C8.8817 3.10054 8.75 3.41848 8.75 3.75V5H6.25C5.25544 5 4.30161 5.39509 3.59835 6.09835C2.89509 6.80161 2.5 7.75544 2.5 8.75V23.75C2.5 24.7446 2.89509 25.6984 3.59835 26.4017C4.30161 27.1049 5.25544 27.5 6.25 27.5H23.75C24.7446 27.5 25.6984 27.1049 26.4017 26.4017C27.1049 25.6984 27.5 24.7446 27.5 23.75V8.75C27.5 7.75544 27.1049 6.80161 26.4017 6.09835C25.6984 5.39509 24.7446 5 23.75 5ZM25 23.75C25 24.0815 24.8683 24.3995 24.6339 24.6339C24.3995 24.8683 24.0815 25 23.75 25H6.25C5.91848 25 5.60054 24.8683 5.36612 24.6339C5.1317 24.3995 5 24.0815 5 23.75V15H25V23.75ZM25 12.5H5V8.75C5 8.41848 5.1317 8.10054 5.36612 7.86612C5.60054 7.6317 5.91848 7.5 6.25 7.5H8.75V8.75C8.75 9.08152 8.8817 9.39946 9.11612 9.63388C9.35054 9.8683 9.66848 10 10 10C10.3315 10 10.6495 9.8683 10.8839 9.63388C11.1183 9.39946 11.25 9.08152 11.25 8.75V7.5H18.75V8.75C18.75 9.08152 18.8817 9.39946 19.1161 9.63388C19.3505 9.8683 19.6685 10 20 10C20.3315 10 20.6495 9.8683 20.8839 9.63388C21.1183 9.39946 21.25 9.08152 21.25 8.75V7.5H23.75C24.0815 7.5 24.3995 7.6317 24.6339 7.86612C24.8683 8.10054 25 8.41848 25 8.75V12.5Z"
        fill={color}
      />
    </svg>
  );
};

export default CalenderIcon;
