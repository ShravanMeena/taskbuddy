import React from 'react';
import TBCard from './TBCard';
import TBSpacer from './TBSpacer';

const TBDivider = ({
  mTop,
  mBottom,
  mLeft,
  mRight,
  width,
  height,
  color,
  center,
}) => {
  return (
    <TBCard
      mTop={mTop}
      mBottom={mBottom}
      mLeft={mLeft}
      mRight={mRight}
      center={center}>
      <TBSpacer width={width} height={height} color={color} />
    </TBCard>
  );
};

export default TBDivider;
