import { memo, SVGProps } from 'react';

const VectorIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1725 223' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.662815 157.841C146.885 -6.84082 470.448 -48.7141 756.827 64.6705C1062.33 185.612 1415.53 323 1724.76 114.856'
      stroke='#0788B3'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon11);
export { Memo as VectorIcon11 };
