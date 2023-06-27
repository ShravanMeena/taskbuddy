/* eslint-disable react/react-in-jsx-scope */
import TBCard from '../../../components/atoms/TBCard';
import TaskCompletedCard from '../../../components/generic/TaskCompletedCard';
import TaskProgressCard from '../../../components/generic/TaskProgressCard';
import {TBComponentSize, TBSpacing} from '../../../theme/TBTheme';

export const renderItemForProgreess = ({item}) => (
  <TBCard
    cardStyle={{
      width:
        // onGoingTasks?.length === 1
        //   ? TBComponentSize.contentWidth
        //   : TBComponentSize.cardBannerWidth,
        TBComponentSize.cardBannerWidth,
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
