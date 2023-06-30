import React from 'react';
import {TBComponentSize} from '@theme/TBTheme';
import {TBText, TBCard} from './';

export default function TBEmptyCard({emptyMsg}) {
  return (
    <TBCard
      center
      cardStyle={{
        height: TBComponentSize.cardHeightM,
      }}>
      <TBText>{emptyMsg}</TBText>
    </TBCard>
  );
}
