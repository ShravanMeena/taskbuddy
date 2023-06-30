import React from 'react';
import TBCard from './TBCard';
import TBText from './TBText';

export default function TBEmptyCard({emptyMsg}) {
  return (
    <TBCard center>
      <TBText>{emptyMsg}</TBText>
    </TBCard>
  );
}
