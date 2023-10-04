import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Features3_Property1Frame480955.module.css';
import { IconEmptyWalletIcon } from './IconEmptyWalletIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:76 */
export const Features3_Property1Frame480955: FC<Props> = memo(function Features3_Property1Frame480955(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095525}>
        <div className={classes.frame2124}>
          <div className={classes.IconEmptyWallet}>
            <IconEmptyWalletIcon className={classes.icon} />
          </div>
          <div className={classes.instantWalletSignIn}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Instant </span>
              <span className={classes.label2}>Wallet</span>
            </p>
            <div className={classes.textBlock}>Sign In</div>
          </div>
        </div>
        <div className={classes.frame48095587}>
          <div className={classes.euTellusQuamIdSedUltricesInteg}>
            Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.
          </div>
        </div>
      </div>
    </div>
  );
});
