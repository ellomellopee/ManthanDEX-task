import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BigDEXInteraction_Property1DEF.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle4333?: string;
    root?: string;
  };
}
/* @figmaId 2:274 */
export const BigDEXInteraction_Property1DEF: FC<Props> = memo(function BigDEXInteraction_Property1DEF(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095564}>
        <div className={`${props.classes?.rectangle4333 || ''} ${classes.rectangle4333}`}></div>
      </div>
      <div className={classes.aORDERBOOKBASEDCOMPLETE}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>A </span>
          <span className={classes.label2}>ORDER BOOK</span>
          <span className={classes.label3}> </span>
          <span className={classes.label4}>BASED</span>
          <span className={classes.label5}> COMPLETE</span>
        </p>
      </div>
    </div>
  );
});
