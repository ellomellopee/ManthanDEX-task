import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './TITLEDEX_Property1Frame4809561.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle4349?: string;
  };
}
/* @figmaId 2:198 */
export const TITLEDEX_Property1Frame4809561: FC<Props> = memo(function TITLEDEX_Property1Frame4809561(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.manthanDEX}>Manthan DEX</div>
      <div className={`${props.classes?.rectangle4349 || ''} ${classes.rectangle4349}`}></div>
    </div>
  );
});
