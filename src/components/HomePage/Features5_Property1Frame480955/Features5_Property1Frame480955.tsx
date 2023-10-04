import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Features5_Property1Frame480955.module.css';
import { IconGiftIcon } from './IconGiftIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:138 */
export const Features5_Property1Frame480955: FC<Props> = memo(function Features5_Property1Frame480955(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095525}>
        <div className={classes.frame2124}>
          <div className={classes.IconGift}>
            <IconGiftIcon className={classes.icon} />
          </div>
          <div className={classes.rewards}>
            <div className={classes.textBlock}>Rewards</div>
            <div className={classes.textBlock2}>
              <p></p>
            </div>
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
