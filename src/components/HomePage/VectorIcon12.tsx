import { memo, SVGProps } from 'react';

const VectorIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1724 212' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.905769 164.333C138.798 -3.85991 466.837 -50.3894 754.938 60.7281C1059.24 178.08 1416.29 311.368 1723.05 98.9007'
      stroke='#087EAD'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon12);
export { Memo as VectorIcon12 };
