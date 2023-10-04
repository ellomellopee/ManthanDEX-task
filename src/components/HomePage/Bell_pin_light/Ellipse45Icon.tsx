import { memo, SVGProps } from 'react';

const Ellipse45Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.102222 4.40587C0.273147 5.15008 0.649783 5.8077 1.17372 6.27674C1.69765 6.74577 2.3396 7 3 7C3.6604 7 4.30235 6.74577 4.82628 6.27674C5.35022 5.80771 5.72685 5.15008 5.89778 4.40587'
      stroke='#222222'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(Ellipse45Icon);
export { Memo as Ellipse45Icon };
