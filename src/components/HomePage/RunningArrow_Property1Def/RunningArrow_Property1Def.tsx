import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Frame48095596Icon } from './Frame48095596Icon';
import classes from './RunningArrow_Property1Def.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:328 */
export const RunningArrow_Property1Def: FC<Props> = memo(function RunningArrow_Property1Def(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095596}>
        <Frame48095596Icon className={classes.icon} />
      </div>
    </div>
  );
});
