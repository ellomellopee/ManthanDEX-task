import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonSignIn_Property1Frame119.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:216 */
export const ButtonSignIn_Property1Frame119: FC<Props> = memo(function ButtonSignIn_Property1Frame119(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <button className={classes.button5}>
        <div className={classes.signIn}>Sign In</div>
      </button>
    </div>
  );
});
