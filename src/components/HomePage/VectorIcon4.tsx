import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1739 303' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.995419 111.426C205.424 -28.6851 497.079 -37.3531 772.064 91.3227C1085.73 238.079 1412.17 403.461 1738.69 225.566'
      stroke='#06CADC'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
