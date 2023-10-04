import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BitcoinMarket_Property1Frame48.module.css';
import { Vector583Icon } from './Vector583Icon';

interface Props {
  className?: string;
  classes?: {
    image8?: string;
  };
}
/* @figmaId 2:635 */
export const BitcoinMarket_Property1Frame48: FC<Props> = memo(function BitcoinMarket_Property1Frame48(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame48095615}>
        <div className={classes.frame48095549}>
          <div className={classes.frame48095614}>
            <div className={`${props.classes?.image8 || ''} ${classes.image8}`}></div>
            <div className={classes.bitcoin}>Bitcoin</div>
          </div>
          <div className={classes.bTCUSD}>BTC/USD</div>
        </div>
        <div className={classes.frame48095552}>
          <div className={classes.frame48095548}>
            <div className={classes._4032250}>$40,322.50</div>
            <div className={classes.frame14}>
              <div className={classes._23}>+0.23%</div>
            </div>
          </div>
          <div className={classes.vector583}>
            <Vector583Icon className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
});
