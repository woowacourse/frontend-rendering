import localFont from 'next/font/local';

const nanumSquareRound = localFont({
  src: [
    {
      path: '../assets/NanumSquareRoundBlankGlyphRemoved.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default nanumSquareRound;
