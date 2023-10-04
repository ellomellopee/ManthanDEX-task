import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 0L6 6L-2.62268e-07 5.24537e-07' stroke='#222222' />
  </svg>
);

const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };
