import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {TBColors, TBOpacity, TBSpacing} from '@theme/TBTheme';
import {readByIdTaskAction} from '@redux/actions/todoActions';

import {TBSpacer, TBDivider} from './';
import {UpdateAndCreateTask} from '../generic';

const TBModal = ({children, task, renderComponent}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const setTaskForUpdate = () => {
    !renderComponent && dispatch(readByIdTaskAction(task));
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <Pressable style={styles.modalView}>
              <TBSpacer />
              <TBDivider
                color={TBColors.bleachGrey}
                height={TBSpacing.xs}
                width={TBSpacing.xxl}
              />
              <TBSpacer />
              <ScrollView keyboardShouldPersistTaps="handled">
                {renderComponent ? (
                  renderComponent()
                ) : (
                  <UpdateAndCreateTask
                    closeModal={() => setModalVisible(false)}
                  />
                )}
              </ScrollView>
              <TBSpacer />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setTaskForUpdate();
          setModalVisible(true);
        }}>
        {children}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: TBColors.rgbaTransparent,
  },
  modalView: {
    width: '100%',
    backgroundColor: TBColors.white,
    // borderTopLeftRadius: TBSpacing.xl,
    // borderTopRightRadius: TBSpacing.xl,
    paddingHorizontal: TBSpacing.large,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: TBOpacity.quarter,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TBModal;
