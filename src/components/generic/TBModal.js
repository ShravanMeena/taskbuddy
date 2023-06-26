import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import CreateNewTask from './CreateNewTask';
import {TBColors} from '../../theme/TBTheme';
import TBButton from '../atoms/TBButton';

const TBModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <CreateNewTask />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TBButton
        backgroundColor={TBColors.primary}
        title="Create Task"
        onPress={() => setModalVisible(true)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: TBColors.transparent,
  },
  modalView: {
    backgroundColor: TBColors.greyDark,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
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
