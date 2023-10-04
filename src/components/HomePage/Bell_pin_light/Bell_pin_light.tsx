import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Bell_pin_light.module.css';
import { Ellipse6Icon } from './Ellipse6Icon';
import { Ellipse45Icon } from './Ellipse45Icon';
import { SubtractIcon } from './SubtractIcon';

interface Props {
  className?: string;
  swap?: {
    subtract?: ReactNode;
    ellipse45?: ReactNode;
    ellipse6?: ReactNode;
  };
}
/* @figmaId 2:13 */
export const Bell_pin_light: FC<Props> = memo(function Bell_pin_light(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.subtract}>{props.swap?.subtract || <SubtractIcon className={classes.icon} />}</div>
      <div className={classes.ellipse45}>{props.swap?.ellipse45 || <Ellipse45Icon className={classes.icon2} />}</div>
      <div className={classes.ellipse6}>{props.swap?.ellipse6 || <Ellipse6Icon className={classes.icon3} />}</div>
    </div>
  );
});
