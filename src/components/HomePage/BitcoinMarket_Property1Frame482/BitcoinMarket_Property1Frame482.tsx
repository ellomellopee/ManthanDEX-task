import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BitcoinMarket_Property1Frame482.module.css';
import { Vector583Icon } from './Vector583Icon';

interface Props {
  className?: string;
  classes?: {
    image10?: string;
  };
}
/* @figmaId 2:723 */
export const BitcoinMarket_Property1Frame482: FC<Props> = memo(function BitcoinMarket_Property1Frame482(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame48095615}>
        <div className={classes.frame48095549}>
          <div className={classes.frame48095614}>
            <div className={`${props.classes?.image10 || ''} ${classes.image10}`}></div>
            <div className={classes.ethereum}>Ethereum</div>
          </div>
          <div className={classes.bTCUSD}>BTC/USD</div>
        </div>
        <div className={classes.frame48095552}>
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
