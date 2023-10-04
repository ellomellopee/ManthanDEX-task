import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BlueShapeSlide_Property1DEF } from '../BlueShapeSlide_Property1DEF/BlueShapeSlide_Property1DEF';
import { Component54_Property1DEF } from '../Component54_Property1DEF/Component54_Property1DEF';
import { MarketSlide_Property1DEF } from '../MarketSlide_Property1DEF/MarketSlide_Property1DEF';
import { OrderBookSlide_Property1DEF } from '../OrderBookSlide_Property1DEF/OrderBookSlide_Property1DEF';
import { PositionSlide_Property1DEF } from '../PositionSlide_Property1DEF/PositionSlide_Property1DEF';
import { Ellipse208Icon } from './Ellipse208Icon';
import { Ellipse209Icon } from './Ellipse209Icon';
import classes from './TradingScreenPOpUp.module.css';

interface Props {
  className?: string;
  classes?: {
    mainBlank1?: string;
    buySell?: string;
    order?: string;
    market?: string;
    positions?: string;
    root?: string;
  };
}
/* @figmaId 2:224 */
export const TradingScreenPOpUp: FC<Props> = memo(function TradingScreenPOpUp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <BlueShapeSlide_Property1DEF className={classes.blueShapeSlide} />
      <div className={`${props.classes?.mainBlank1 || ''} ${classes.mainBlank1}`}></div>
      <Component54_Property1DEF
        className={classes.component56}
        classes={{ buySell: `${props.classes?.buySell || ''} ${classes.buySell}` }}
      />
      <div className={classes.ellipse208}>
        <Ellipse208Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse209}>
        <Ellipse209Icon className={classes.icon2} />
      </div>
      <OrderBookSlide_Property1DEF
        className={classes.orderBookSlide}
        classes={{ order: `${props.classes?.order || ''} ${classes.order}` }}
      />
      <MarketSlide_Property1DEF
        className={classes.component72}
        classes={{ market: `${props.classes?.market || ''} ${classes.market}` }}
      />
      <PositionSlide_Property1DEF
        className={classes.component74}
        classes={{ positions: `${props.classes?.positions || ''} ${classes.positions}` }}
      />
    </div>
  );
});
