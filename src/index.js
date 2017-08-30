import React from 'react';
import { render } from 'react-dom';

import App from './components/app';

import '../assets/spritesheet/sprite.css-e93da542.svg';
import '../style/style.scss';

render(
  <App />
  , document.querySelector('#root')
);
