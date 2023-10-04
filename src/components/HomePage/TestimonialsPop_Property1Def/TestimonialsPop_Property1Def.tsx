import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Frame48095632Icon } from './Frame48095632Icon';
import { Frame48095633Icon } from './Frame48095633Icon';
import classes from './TestimonialsPop_Property1Def.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:389 */
export const TestimonialsPop_Property1Def: FC<Props> = memo(function TestimonialsPop_Property1Def(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.component105}>
        <div className={classes.frame48095638}>
          <div className={classes.frame48095635}>
            <div className={classes.frame48095632}>
              <Frame48095632Icon className={classes.icon} />
            </div>
            <div className={classes.euTellusQuamIdSedUltricesInteg}>
              <div className={classes.textBlock}>
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.
              </div>
              <div className={classes.textBlock2}>
                Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.
              </div>
            </div>
            <div className={classes.frame48095633}>
              <Frame48095633Icon className={classes.icon2} />
            </div>
          </div>
          <div className={classes.mrSougfvkc}>Mr. sougfvkc</div>
        </div>
      </div>
    </div>
  );
});
