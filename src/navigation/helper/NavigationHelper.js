import {CommonActions, StackActions} from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const push = (name, params) => {
  navigationRef.current?.dispatch(StackActions.push(name, params));
};

export const resetNavigationStack = (name, index = 0, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{name, params}],
    }),
  );
};
