import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BlingDEF_Property1Default.module.css';
import { Frame48095611Icon } from './Frame48095611Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    frame48095611?: ReactNode;
  };
}
/* @figmaId 2:5 */
export const BlingDEF_Property1Default: FC<Props> = memo(function BlingDEF_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095611}>
        {props.swap?.frame48095611 || <Frame48095611Icon className={classes.icon} />}
      </div>
    </div>
  );
});
