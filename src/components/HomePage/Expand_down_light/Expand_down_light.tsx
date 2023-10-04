import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Expand_down_light.module.css';
import { Vector9Icon } from './Vector9Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector9?: ReactNode;
  };
}
/* @figmaId 2:25 */
export const Expand_down_light: FC<Props> = memo(function Expand_down_light(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector9}>{props.swap?.vector9 || <Vector9Icon className={classes.icon} />}</div>
    </div>
  );
});
