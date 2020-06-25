import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({ children }) => {
  const errorType = children === 'Введите текст' ? 'warning' : 'danger';
  return <Alert variant={errorType} >{children}</Alert>;
};

export default Error;
