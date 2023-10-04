import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1743 329' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.509506 99.4519C221.586 -33.6358 503.912 -32.4245 775.854 100.219C1091.6 254.832 1410.64 427.737 1742.08 258.488'
      stroke='#06DDE7'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
