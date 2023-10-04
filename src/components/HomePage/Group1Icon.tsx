import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M46.2923 0H1.89742C0.849504 0 0 0.849504 0 1.89742V30.1026C0 31.1505 0.849504 32 1.89742 32H46.2923C47.3402 32 48.1897 31.1505 48.1897 30.1026V1.89742C48.1897 0.849504 47.3402 0 46.2923 0Z'
      fill='white'
    />
    <path d='M24.0948 19.6597L32.6 6.43708H15.5896L24.0948 19.6597Z' fill='#191235' />
    <path d='M14.4464 12.3332L5.94122 25.5606H22.9516L14.4464 12.3332Z' fill='#191235' />
    <path d='M33.7433 12.3332L25.2382 25.5535H42.2485L33.7433 12.3332Z' fill='#191235' />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
