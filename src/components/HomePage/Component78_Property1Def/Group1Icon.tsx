import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M61.5153 0.0980988H3.38013C2.00788 0.0980988 0.895454 1.21053 0.895454 2.58277V39.5175C0.895454 40.8897 2.00788 42.0021 3.38013 42.0021H61.5153C62.8876 42.0021 64 40.8897 64 39.5175V2.58277C64 1.21053 62.8876 0.0980988 61.5153 0.0980988Z'
      fill='white'
    />
    <path d='M32.4476 25.8431L43.5852 8.52803H21.3101L32.4476 25.8431Z' fill='#191235' />
    <path d='M19.813 16.2482L8.67544 33.5695H30.9506L19.813 16.2482Z' fill='#191235' />
    <path d='M45.0826 16.2482L33.945 33.5602H56.2202L45.0826 16.2482Z' fill='#191235' />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
