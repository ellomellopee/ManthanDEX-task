import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BitcoinCashMarket_Property1Fra3.module.css';
import { Vector583Icon } from './Vector583Icon';

interface Props {
  className?: string;
  classes?: {
    image11?: string;
    root?: string;
  };
}
/* @figmaId 2:782 */
export const BitcoinCashMarket_Property1Fra3: FC<Props> = memo(function BitcoinCashMarket_Property1Fra3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095615}>
        <div className={classes.frame48095549}>
          <div className={classes.frame48095614}>
            <div className={`${props.classes?.image11 || ''} ${classes.image11}`}></div>
            <div className={classes.binanceCoin}>Binance Coin</div>
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
