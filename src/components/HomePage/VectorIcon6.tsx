import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1735 279' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.503548 124.4C188.273 -22.7232 489.091 -40.9483 767.286 83.4157C1078.69 222.682 1412.7 380.185 1734.28 193.655'
      stroke='#07B7D0'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
