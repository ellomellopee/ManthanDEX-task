import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PositionSlide_Property1DEF.module.css';

interface Props {
  className?: string;
  classes?: {
    positions?: string;
    root?: string;
  };
}
/* @figmaId 2:265 */
export const PositionSlide_Property1DEF: FC<Props> = memo(function PositionSlide_Property1DEF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4331}></div>
      <div className={`${props.classes?.positions || ''} ${classes.positions}`}></div>
    </div>
  );
});
