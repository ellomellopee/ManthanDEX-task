import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component54_Property1DEF.module.css';

interface Props {
  className?: string;
  classes?: {
    buySell?: string;
    root?: string;
  };
}
/* @figmaId 2:244 */
export const Component54_Property1DEF: FC<Props> = memo(function Component54_Property1DEF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4332}></div>
      <div className={`${props.classes?.buySell || ''} ${classes.buySell}`}></div>
    </div>
  );
});
