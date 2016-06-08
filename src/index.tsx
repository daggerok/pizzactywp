/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pizzactywp } from './index/Pizzactywp';

let pizzactywp: HTMLElement = document.getElementById('pizzactywp');

ReactDOM.render(
  <Pizzactywp compiler='TypeScript' framework='React'/>, pizzactywp
);
