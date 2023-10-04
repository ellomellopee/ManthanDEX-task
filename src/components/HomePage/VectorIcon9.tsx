import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1729 245' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.188002 143.867C163.036 -13.7915 477.525 -46.2855 760.617 71.5775C1068.51 199.764 1414 345.276 1728.16 145.778'
      stroke='#079BBF'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
