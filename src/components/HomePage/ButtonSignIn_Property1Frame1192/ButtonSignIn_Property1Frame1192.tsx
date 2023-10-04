import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonSignIn_Property1Frame1192.module.css';
import { Vector10Icon } from './Vector10Icon';

interface Props {
  className?: string;
}
/* @figmaId 2:811 */
export const ButtonSignIn_Property1Frame1192: FC<Props> = memo(function ButtonSignIn_Property1Frame1192(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <button className={classes.button5}>
        <div className={classes.frame48095624}>
          <div className={classes.exploreMore}>Explore More</div>
          <div className={classes.vector10}>
            <Vector10Icon className={classes.icon} />
          </div>
        </div>
      </button>
    </div>
  );
});
