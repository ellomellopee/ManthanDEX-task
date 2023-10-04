import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './MarketSlide_Property1DEF.module.css';

interface Props {
  className?: string;
  classes?: {
    market?: string;
    root?: string;
  };
}
/* @figmaId 2:262 */
export const MarketSlide_Property1DEF: FC<Props> = memo(function MarketSlide_Property1DEF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.market || ''} ${classes.market}`}></div>
    </div>
  );
});
