/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useDispatch} from 'react-redux';

import {
  TBColors,
  TBComponentSize,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from '@theme/TBTheme';

import {TBPriorityColor} from '@constants/TBConstants';
import {updateTaskAction} from '@redux/actions/todoActions';
import {TBModal, TBDivider, TBText, TBCard, TBRadio} from '../atoms';
import {capitalizeFirstLetter} from '@utils/CommonUtils';

export default function TaskCompletedCard({task}) {
  let {fullDate} = task.selectedDate;

  const dispatch = useDispatch();
  const updateStatus = () => {
    let newTask = {...task, completed: false};
    dispatch(updateTaskAction(task.id, newTask));
  };

  return (
    <TBModal task={task}>
      <TBCard
        row
        cardStyle={{
          backgroundColor: TBColors.white,
        }}>
        <TBCard
          cardStyle={{
            width: TBComponentSize.iconHeightS,
            backgroundColor: TBPriorityColor[task.priority],
          }}
        />
        <TBCard
          cardStyle={{
            padding: TBSpacing.large,
            width: '100%',
          }}>
          <TBCard row spaceBetween>
            <TBText
              numberOfLines={1}
              fontSize={TBFontSize.xxxl}
              fontWeight={TBFontWeight.semibold}
              style={{
                textDecorationLine: 'line-through',
                width: '80%',
              }}>
              {capitalizeFirstLetter(task.title)}
            </TBText>
            <TBRadio isCompleted onPress={updateStatus} />
          </TBCard>

          <TBText numberOfLines={2} fontSize={TBFontSize.large}>
            {task.description}
          </TBText>
          <TBDivider
            mTop={TBSpacing.small}
            mBottom={TBSpacing.small}
            color={TBColors.lightGreyText}
            width={'100%'}
            height={1}
          />
          <TBText fontSize={TBFontSize.xl}>{fullDate}</TBText>
        </TBCard>
      </TBCard>
    </TBModal>
  );
}
