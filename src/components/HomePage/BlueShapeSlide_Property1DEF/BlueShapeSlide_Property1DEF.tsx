import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlueShapeSlide_Property1DEF.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:235 */
export const BlueShapeSlide_Property1DEF: FC<Props> = memo(function BlueShapeSlide_Property1DEF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4329}></div>
      <div className={classes.rectangle4330}></div>
    </div>
  );
});
