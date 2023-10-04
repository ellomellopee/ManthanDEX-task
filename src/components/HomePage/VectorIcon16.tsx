import { memo, SVGProps } from 'react';

const VectorIcon16 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1716 195' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.866497 194.281C105.496 12.0305 451.504 -52.8131 746.38 48.9252C1045.72 152.208 1418.29 268.815 1715.24 39.057'
      stroke='#085896'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon16);
export { Memo as VectorIcon16 };
