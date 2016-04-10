import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import Dispatcher from 'redux-devtools-dispatch';

import * as actionCreators from '../actions/CounterActions';
import * as reduxActionCreators from '../actions/CounterReduxActions';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <MultipleMonitors>
      <LogMonitor />
      <Dispatcher actionCreators={{...actionCreators, reduxActions: reduxActionCreators}} initEmpty />
    </MultipleMonitors>
  </DockMonitor>
);
