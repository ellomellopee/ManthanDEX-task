import { memo, SVGProps } from 'react';

const VectorIcon20 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1708 246' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.827225 245.23C72.1834 48.9653 435.961 -33.5365 737.812 58.1335C1032.03 148.014 1420.4 247.274 1707.42 0.224274'
      stroke='#09327F'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon20);
export { Memo as VectorIcon20 };
