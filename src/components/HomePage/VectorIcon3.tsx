import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1741 317' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.752463 105.933C213.511 -30.666 500.368 -34.0888 773.965 96.2651C1088.51 247.289 1411.45 416.093 1740.39 242.533'
      stroke='#06D4E1'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
