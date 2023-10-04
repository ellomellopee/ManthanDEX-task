import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSun.module.css';
import { VuesaxLinearSunIcon } from './VuesaxLinearSunIcon';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearSun?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearSun?: ReactNode;
  };
}
/* @figmaId 2:19 */
export const VuesaxLinearSun: FC<Props> = memo(function VuesaxLinearSun(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearSun || ''} ${classes.vuesaxLinearSun}`}>
        {props.swap?.vuesaxLinearSun || <VuesaxLinearSunIcon className={classes.icon} />}
      </div>
    </div>
  );
});
