import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Features4_Property1Frame480955.module.css';
import { IconCardCoinIcon } from './IconCardCoinIcon';

interface Props {
  className?: string;
}
/* @figmaId 2:104 */
export const Features4_Property1Frame480955: FC<Props> = memo(function Features4_Property1Frame480955(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame48095525}>
        <div className={classes.frame48095588}>
          <div className={classes.IconCardCoin}>
            <IconCardCoinIcon className={classes.icon} />
          </div>
          <div className={classes.noMinimumTradeSize}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>No Minimum</span>
            </p>
            <div className={classes.textBlock}>Trade Size</div>
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
