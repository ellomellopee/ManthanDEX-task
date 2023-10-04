import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1736 291' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.227275 117.919C196.349 -25.7041 492.591 -39.184 769.175 87.3693C1081.72 230.37 1411.94 391.862 1735.99 209.611'
      stroke='#07C1D6'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
