import { memo, SVGProps } from 'react';

const VuesaxLinearSunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 12.3333C10.3932 12.3333 12.3333 10.3932 12.3333 8C12.3333 5.60677 10.3932 3.66667 8 3.66667C5.60677 3.66667 3.66667 5.60677 3.66667 8C3.66667 10.3932 5.60677 12.3333 8 12.3333Z'
      stroke='#E5E7EB'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.76 12.76L12.6733 12.6733M12.6733 3.32667L12.76 3.24L12.6733 3.32667ZM3.24 12.76L3.32667 12.6733L3.24 12.76ZM8 1.38667V1.33333V1.38667ZM8 14.6667V14.6133V14.6667ZM1.38667 8H1.33333H1.38667ZM14.6667 8H14.6133H14.6667ZM3.32667 3.32667L3.24 3.24L3.32667 3.32667Z'
      stroke='#E5E7EB'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VuesaxLinearSunIcon);
export { Memo as VuesaxLinearSunIcon };
