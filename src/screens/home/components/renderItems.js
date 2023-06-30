/* eslint-disable react/react-in-jsx-scope */

import {TBComponentSize, TBSpacing} from '@theme/TBTheme';

import {TBCard} from '@components/atoms';
import {TaskCompletedCard, TaskProgressCard} from '@components/generic';

export const renderItemForProgreess = ({item}) => (
  <TBCard
    cardStyle={{
      width: TBComponentSize.cardBannerWidth,
      marginRight: TBSpacing.small,
    }}>
    <TaskProgressCard task={item} />
  </TBCard>
);

export const renderItemForCompleted = ({item}) => (
  <TBCard
    cardStyle={{
      width: TBComponentSize.contentWidth,
      marginBottom: TBSpacing.small,
    }}>
    <TaskCompletedCard task={item} />
  </TBCard>
);
