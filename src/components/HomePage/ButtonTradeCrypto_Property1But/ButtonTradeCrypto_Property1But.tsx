import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonTradeCrypto_Property1But.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:209 */
export const ButtonTradeCrypto_Property1But: FC<Props> = memo(function ButtonTradeCrypto_Property1But(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.tradeCrypto}>Trade Crypto </div>
    </button>
  );
});
