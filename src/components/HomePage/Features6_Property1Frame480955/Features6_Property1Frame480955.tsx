import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Features6_Property1Frame480955.module.css';
import { IconMenuIcon } from './IconMenuIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:168 */
export const Features6_Property1Frame480955: FC<Props> = memo(function Features6_Property1Frame480955(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095525}>
        <div className={classes.frame48095588}>
          <div className={classes.IconMenu}>
            <IconMenuIcon className={classes.icon} />
          </div>
          <div className={classes.blockchainInteroperability}>
            <div className={classes.textBlock}>Blockchain</div>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Interoperability</span>
            </p>
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
