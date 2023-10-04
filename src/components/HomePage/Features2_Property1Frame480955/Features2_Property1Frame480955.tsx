import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Features2_Property1Frame480955.module.css';
import { IconTradeIcon } from './IconTradeIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:52 */
export const Features2_Property1Frame480955: FC<Props> = memo(function Features2_Property1Frame480955(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095525}>
        <div className={classes.frame48095588}>
          <div className={classes.IconTrade}>
            <IconTradeIcon className={classes.icon} />
          </div>
          <div className={classes.veryLessTransactionFee}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Very </span>
              <span className={classes.label2}>Less </span>
            </p>
            <div className={classes.textBlock}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label3}>Transaction fee</span>
              </p>
            </div>
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
