import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1731 256' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.945045 137.374C172.111 -16.7725 482.058 -44.5435 763.507 75.5199C1072.59 207.374 1414.23 356.909 1730.84 161.733'
      stroke='#07A4C4'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
