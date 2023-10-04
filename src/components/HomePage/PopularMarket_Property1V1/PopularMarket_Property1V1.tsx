import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BitcoinCashMarket_Property1Fra2 } from '../BitcoinCashMarket_Property1Fra2/BitcoinCashMarket_Property1Fra2';
import { BitcoinCashMarket_Property1Fra3 } from '../BitcoinCashMarket_Property1Fra3/BitcoinCashMarket_Property1Fra3';
import { BitcoinCashMarket_Property1Fra } from '../BitcoinCashMarket_Property1Fra/BitcoinCashMarket_Property1Fra';
import { BitcoinMarket_Property1Frame48 } from '../BitcoinMarket_Property1Frame48/BitcoinMarket_Property1Frame48';
import { BitcoinMarket_Property1Frame482 } from '../BitcoinMarket_Property1Frame482/BitcoinMarket_Property1Frame482';
import { BSVMarket_Property1Frame480956 } from '../BSVMarket_Property1Frame480956/BSVMarket_Property1Frame480956';
import { ButtonSignIn_Property1Frame1192 } from '../ButtonSignIn_Property1Frame1192/ButtonSignIn_Property1Frame1192';
import classes from './PopularMarket_Property1V1.module.css';

interface Props {
  className?: string;
  classes?: {
    image8?: string;
    image13?: string;
    imageRemovebgPreview1?: string;
    image132?: string;
    image10?: string;
    image12?: string;
    image11?: string;
    image122?: string;
    image102?: string;
    image123?: string;
    image112?: string;
    image124?: string;
    root?: string;
  };
}
/* @figmaId 2:849 */
export const PopularMarket_Property1V1: FC<Props> = memo(function PopularMarket_Property1V1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame48095628}>
        <div className={classes.frame48095578}>
          <div className={classes.frame48095610}>
            <div className={classes.frame48095573}>
              <div className={classes.popularMarkets}>Popular Markets</div>
            </div>
            <div className={classes.builtOnBSVBlockchainAndSupport}>
              Built on BSV Blockchain and supports all mainstream blockchain interoperability
            </div>
          </div>
        </div>
        <div className={classes.frame48095625}>
          <div className={classes.frame48095620}>
            <div className={classes.frame48095618}>
              <BitcoinMarket_Property1Frame48
                classes={{ image8: `${props.classes?.image8 || ''} ${classes.image8}` }}
              />
              <BitcoinCashMarket_Property1Fra
                className={classes.bitcoinCashMarket}
                classes={{ image13: `${props.classes?.image13 || ''} ${classes.image13}` }}
              />
              <BSVMarket_Property1Frame480956
                className={classes.bSVMarket}
                classes={{
                  imageRemovebgPreview1: `${props.classes?.imageRemovebgPreview1 || ''} ${
                    classes.imageRemovebgPreview1
                  }`,
                }}
              />
              <BitcoinCashMarket_Property1Fra
                className={classes.bitcoinCashMarket2}
                classes={{ image13: `${props.classes?.image132 || ''} ${classes.image132}` }}
              />
            </div>
            <div className={classes.frame48095619}>
              <BitcoinMarket_Property1Frame482
                classes={{ image10: `${props.classes?.image10 || ''} ${classes.image10}` }}
              />
              <BitcoinCashMarket_Property1Fra2
                className={classes.bitcoinCashMarket3}
                classes={{ image12: `${props.classes?.image12 || ''} ${classes.image12}` }}
              />
              <BitcoinCashMarket_Property1Fra3
                className={classes.bitcoinCashMarket4}
                classes={{ image11: `${props.classes?.image11 || ''} ${classes.image11}` }}
              />
              <BitcoinCashMarket_Property1Fra2
                className={classes.bitcoinCashMarket5}
                classes={{ image12: `${props.classes?.image122 || ''} ${classes.image122}` }}
              />
            </div>
            <div className={classes.frame480956202}>
              <BitcoinMarket_Property1Frame482
                classes={{ image10: `${props.classes?.image102 || ''} ${classes.image102}` }}
              />
              <BitcoinCashMarket_Property1Fra2
                className={classes.bitcoinCashMarket6}
                classes={{ image12: `${props.classes?.image123 || ''} ${classes.image123}` }}
              />
              <BitcoinCashMarket_Property1Fra3
                className={classes.bitcoinCashMarket7}
                classes={{ image11: `${props.classes?.image112 || ''} ${classes.image112}` }}
              />
              <BitcoinCashMarket_Property1Fra2
                className={classes.bitcoinCashMarket8}
                classes={{ image12: `${props.classes?.image124 || ''} ${classes.image124}` }}
              />
            </div>
          </div>
          <ButtonSignIn_Property1Frame1192 />
        </div>
      </div>
    </div>
  );
});
