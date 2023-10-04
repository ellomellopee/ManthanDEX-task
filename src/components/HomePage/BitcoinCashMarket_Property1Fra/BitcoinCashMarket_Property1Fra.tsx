import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BitcoinCashMarket_Property1Fra.module.css';
import { Vector583Icon } from './Vector583Icon';

interface Props {
  className?: string;
  classes?: {
    image13?: string;
    root?: string;
  };
}
/* @figmaId 2:665 */
export const BitcoinCashMarket_Property1Fra: FC<Props> = memo(function BitcoinCashMarket_Property1Fra(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095615}>
        <div className={classes.frame48095549}>
          <div className={classes.frame48095614}>
            <div className={`${props.classes?.image13 || ''} ${classes.image13}`}></div>
            <div className={classes.bitcoinCash}>Bitcoin Cash</div>
          </div>
          <div className={classes.bTCUSD}>BTC/USD</div>
        </div>
        <div className={classes.frame48095553}>
          <div className={classes.frame48095548}>
            <div className={classes._4032250}>$40,322.50</div>
            <div className={classes.frame14}>
              <div className={classes._28}>-0.28%</div>
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
