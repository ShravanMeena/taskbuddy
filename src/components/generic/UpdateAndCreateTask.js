import React from 'react';
import {TBColors, TBComponentSize, TBFontSize, TBSpacing} from '@theme/TBTheme';

import {
  TBButton,
  TBCard,
  TBDivider,
  TBInput,
  TBModal,
  TBSwitch,
  TBText,
  TBDatePickerAndroid,
  TBSpacer,
} from '../atoms';

import {TBStrings} from '@constants/TBConstants';
import {CategoriesListData, prioritiesList} from '@models/dummyTasksData';

import {useCreateAndUpdateForm} from '@hooks';

import List from './components/List';

const UpdateAndCreateTask = ({closeModal}) => {
  // business logic hoook
  const {
    createAndUpdateTaskHandler,
    deleteTaskHandler,
    getState,
    values,
    readTask,
  } = useCreateAndUpdateForm(closeModal);

  return (
    <TBCard width={TBComponentSize.contentWidth}>
      <TBInput
        placeholder={TBStrings.taskTitlePlaceholder}
        value={getState.taskTitle}
        onChangeText={text => values.setTaskTitle(text)}
      />
      <TBInput
        placeholder={TBStrings.taskDescPlaceholder}
        value={getState.taskDescription}
        onChangeText={text => values.setTaskDescription(text)}
        multiline
        numberOfLines={4}
        height={TBComponentSize.cardWidthXS}
      />
      <TBSpacer />
      <TBCard row spaceBetween>
        <TBText fontSize={TBFontSize.xxl}>
          {TBStrings.taskIsCompletedText}
        </TBText>
        <TBSwitch
          value={getState.completed}
          onValueChange={values.setCompleted}
          trueTrackColor={TBColors.primary}
        />
      </TBCard>

      <TBSpacer />
      <TBModal
        renderComponent={() => (
          <List setValue={values.setTaskPriority} data={prioritiesList} />
        )}>
        <TBButton
          title={getState.taskPriority || TBStrings.taskPriorityBtnText}
          disabled
        />
      </TBModal>
      <TBSpacer />
      <TBModal
        renderComponent={() => (
          <List setValue={values.setTaskCategory} data={CategoriesListData} />
        )}>
        <TBButton
          title={getState.taskCategory || TBStrings.taskCategoriesBtnText}
          disabled
        />
      </TBModal>
      <TBSpacer />

      <TBDatePickerAndroid
        activeDate={getState.selectedDate}
        onPress={e => values.setSelectedDate(e)}
      />
      <TBText>
        {TBStrings.taskDateSelectText} {getState.selectedDate?.fullDate}
      </TBText>

      <TBSpacer />
      <TBDivider
        color={TBColors.bleachGrey}
        height={TBSpacing.xss}
        width={TBComponentSize.contentWidth}
      />
      <TBSpacer />
      <TBCard row spaceBetween>
        <TBButton
          title={
            readTask ? TBStrings.taskUpdateBtnText : TBStrings.taskCreateBtnText
          }
          onPress={createAndUpdateTaskHandler}
        />

        {readTask && (
          <>
            <TBButton
              backgroundColor={TBColors.green}
              title={TBStrings.taskDuplicateBtnText}
              onPress={() => createAndUpdateTaskHandler(true)}
            />

            <TBButton
              backgroundColor={TBColors.redText}
              title={TBStrings.taskDeleteBtnText}
              onPress={deleteTaskHandler}
            />
          </>
        )}
      </TBCard>
    </TBCard>
  );
};

export default UpdateAndCreateTask;
