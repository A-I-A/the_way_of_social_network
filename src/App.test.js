import React from 'react';
import { render } from '@testing-library/react';
import AppMain from './App';
import ReactDOM from 'react-dom';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});


