import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.00004 0.5C5.89876 0.5 3.29342 2.83189 2.95094 5.9142L2.69914 8.18042L2.69288 8.23626C2.572 9.28972 2.2291 10.3056 1.68681 11.2168L1.65795 11.265L1.07991 12.2284L1.06599 12.2516C0.815557 12.669 0.608107 13.0147 0.47327 13.301C0.337181 13.5899 0.232288 13.9025 0.284559 14.2338C0.341071 14.5919 0.525404 14.9175 0.803448 15.1502C1.06063 15.3655 1.38261 15.4364 1.70041 15.4683C2.01528 15.5 2.41847 15.5 2.90519 15.5H2.93227H15.0678H15.0949C15.5816 15.5 15.9848 15.5 16.2997 15.4683C16.6175 15.4364 16.9395 15.3655 17.1966 15.1502C17.4747 14.9175 17.659 14.5919 17.7155 14.2338C17.7678 13.9025 17.6629 13.5899 17.5268 13.301C17.392 13.0147 17.1846 12.669 16.9342 12.2517L16.9341 12.2516L16.9202 12.2284L16.3421 11.265L16.3133 11.2168C15.771 10.3056 15.4281 9.28972 15.3072 8.23626L15.3009 8.18042L15.1447 6.77389C14.8396 6.89993 14.5091 6.9771 14.1631 6.99564L14.3071 8.29085L14.3137 8.35026C14.4507 9.54418 14.8393 10.6955 15.4539 11.7282L15.4846 11.7795L16.0627 12.7429C16.3306 13.1894 16.5113 13.4918 16.6221 13.7271C16.7341 13.9649 16.7321 14.0504 16.7277 14.0779C16.7089 14.1973 16.6475 14.3058 16.5548 14.3834C16.5334 14.4013 16.4612 14.447 16.1996 14.4734C15.9408 14.4994 15.5885 14.5 15.0678 14.5H2.93227C2.41159 14.5 2.05923 14.4994 1.80051 14.4734C1.53889 14.447 1.4667 14.4013 1.4453 14.3834C1.35262 14.3058 1.29118 14.1973 1.27234 14.0779C1.26799 14.0504 1.26593 13.9649 1.37796 13.7271C1.48875 13.4918 1.66952 13.1894 1.9374 12.7429L2.51544 11.7795L2.54615 11.7282C3.16074 10.6955 3.54936 9.54418 3.68636 8.35026L3.69302 8.29085L3.94482 6.02463C4.23103 3.44875 6.40831 1.5 9.00004 1.5C9.94269 1.5 10.8305 1.7578 11.5925 2.2098C11.7993 1.93205 12.0531 1.69132 12.3421 1.49934C11.3791 0.865876 10.2285 0.5 9.00004 0.5ZM13.9204 3.00312C13.5559 3.03182 13.2464 3.25595 13.0966 3.57077C13.4095 3.99534 13.6585 4.47134 13.8286 4.98536C13.8843 4.99499 13.9416 5 14 5C14.3086 5 14.5845 4.86025 14.7679 4.64061C14.5681 4.04713 14.2802 3.49646 13.9204 3.00312Z'
      fill='#222222'
    />
  </svg>
);

const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
