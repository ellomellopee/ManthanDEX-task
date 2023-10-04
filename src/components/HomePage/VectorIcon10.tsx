import { memo, SVGProps } from 'react';

const VectorIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1727 233' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.430958 150.359C154.96 -10.8106 473.947 -48.0165 758.728 67.624C1065.43 192.177 1414.76 333.633 1726.46 129.856'
      stroke='#0791B9'
      strokeWidth={0.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(VectorIcon10);
export { Memo as VectorIcon10 };
