import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OrderBookSlide_Property1DEF.module.css';

interface Props {
  className?: string;
  classes?: {
    order?: string;
    root?: string;
  };
}
/* @figmaId 2:253 */
export const OrderBookSlide_Property1DEF: FC<Props> = memo(function OrderBookSlide_Property1DEF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4335}></div>
      <div className={`${props.classes?.order || ''} ${classes.order}`}></div>
    </div>
  );
});
