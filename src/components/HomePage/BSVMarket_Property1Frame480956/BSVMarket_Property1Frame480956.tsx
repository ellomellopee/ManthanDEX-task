import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BSVMarket_Property1Frame480956.module.css';
import { Vector583Icon } from './Vector583Icon';

interface Props {
  className?: string;
  classes?: {
    imageRemovebgPreview1?: string;
    root?: string;
  };
}
/* @figmaId 2:694 */
export const BSVMarket_Property1Frame480956: FC<Props> = memo(function BSVMarket_Property1Frame480956(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095615}>
        <div className={classes.frame48095549}>
          <div className={classes.frame48095614}>
            <div className={`${props.classes?.imageRemovebgPreview1 || ''} ${classes.imageRemovebgPreview1}`}></div>
            <div className={classes.bitcoinSatoshiVersion}>Bitcoin Satoshi Version</div>
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
