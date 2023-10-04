import { memo, SVGProps } from 'react';

const Vector588Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 89 89' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.05} d='M34.5373 0H89M89 0L0 89M89 0V59' stroke='url(#paint0_linear_2_3682)' strokeWidth={15} />
    <defs>
      <linearGradient
        id='paint0_linear_2_3682'
        x1={-3}
        y1={89}
        x2={96.9567}
        y2={-7.54486}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#543A84' />
        <stop offset={0.0001} stopColor='#092879' />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector588Icon);
export { Memo as Vector588Icon };
