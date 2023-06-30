import React from 'react';

export const navigationRef = React.createRef();

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
