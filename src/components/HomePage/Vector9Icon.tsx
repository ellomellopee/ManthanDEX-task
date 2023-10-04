import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M8 2.38419e-07L4 4L-4.13264e-07 5.8811e-07' stroke='#E5E7EB' />
  </svg>
);

const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
