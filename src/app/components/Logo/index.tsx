import Image from 'next/image';
import Box from '../common/Box';

function Logo() {
  return (
    <Box cursor="pointer">
      <Image src="/logo.svg" alt="핀 이미지" layout="intrinsic" width={175} height={50} />
    </Box>
  );
}

export default Logo;
