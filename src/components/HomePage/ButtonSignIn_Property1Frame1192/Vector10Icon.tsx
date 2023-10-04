import { memo, SVGProps } from 'react';

const Vector10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L6 6L0 12' stroke='#E4E4E4' />
  </svg>
);

const Memo = memo(Vector10Icon);
export { Memo as Vector10Icon };
