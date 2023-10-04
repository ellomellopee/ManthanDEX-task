import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Features1_Property1Frame480955.module.css';
import { IconSecurityIcon } from './IconSecurityIcon';

interface Props {
  className?: string;
}
/* @figmaId 2:28 */
export const Features1_Property1Frame480955: FC<Props> = memo(function Features1_Property1Frame480955(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame48095525}>
        <div className={classes.frame2124}>
          <div className={classes.IconSecurity}>
            <IconSecurityIcon className={classes.icon} />
          </div>
          <div className={classes.safeAndSecureTradingPlatform}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Safe and Secure</span>
            </p>
            <div className={classes.textBlock}>Trading Platform</div>
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
