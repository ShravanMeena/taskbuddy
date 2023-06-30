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

import {TBPriorityColor, TBStrings} from '@constants/TBConstants';

import {TBModal, TBDivider, TBText, TBCard, TBSpacer, TBRadio} from '../atoms';
import {updateTaskAction} from '@redux/actions/todoActions';

export default function TaskProgressCard({task}) {
  let {fullDate} = task.selectedDate;
  const dispatch = useDispatch();
  const updateStatus = () => {
    let newTask = {...task, completed: true};
    dispatch(updateTaskAction(task.id, newTask));
  };

  return (
    <TBModal task={task}>
      <TBCard
        cardStyle={{
          padding: TBSpacing.large,
          backgroundColor: TBColors.white,
          borderTopLeftRadius: TBSpacing.medium,
          borderTopRightRadius: TBSpacing.medium,
        }}>
        <TBCard row spaceBetween>
          <TBText
            numberOfLines={1}
            fontSize={TBFontSize.xxxl}
            fontWeight={TBFontWeight.semibold}>
            {task.title}
          </TBText>
          <TBRadio onPress={updateStatus} />
        </TBCard>

        <TBSpacer />
        <TBText fontSize={TBFontSize.xl}>{fullDate}</TBText>
        <TBDivider
          mTop={TBSpacing.large}
          mBottom={TBSpacing.large}
          color={TBColors.lightGreyText}
          width={'100%'}
          height={1}
        />
        <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
          {TBStrings.taskCardDescText}:
        </TBText>
        <TBText numberOfLines={2} fontSize={TBFontSize.large}>
          {task.description}
        </TBText>
        <TBSpacer />
        <TBCard row spaceBetween>
          <TBCard>
            <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
              {TBStrings.taskCardPrioritText}:
            </TBText>
            <TBText fontSize={TBFontSize.large}>
              {task.priority?.toUpperCase()}
            </TBText>
          </TBCard>
          <TBCard>
            <TBText fontSize={TBFontSize.large} color={TBColors.lightGreyText}>
              {TBStrings.taskCardCategoryText}:
            </TBText>
            <TBText fontSize={TBFontSize.large}>
              {task.category?.toUpperCase()}
            </TBText>
          </TBCard>
        </TBCard>
      </TBCard>
      <TBCard
        cardStyle={{
          height: TBComponentSize.iconHeightS,
          backgroundColor: TBPriorityColor[task.priority],
          borderBottomLeftRadius: TBSpacing.medium,
          borderBottomRightRadius: TBSpacing.medium,
        }}
      />
    </TBModal>
  );
}
