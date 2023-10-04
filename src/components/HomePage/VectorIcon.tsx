import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1744 342' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.27765 93.9592C229.661 -35.6167 507.467 -29.7491 777.699 105.172C1094.64 263.386 1409.83 440.369 1743.76 275.455'
      stroke='#06E7ED'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
