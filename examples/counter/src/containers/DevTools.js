import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import Dispatcher from 'redux-devtools-dispatch';

import * as actionCreators from '../actions/CounterActions';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <MultipleMonitors>
      <LogMonitor />
      <Dispatcher actionCreators={actionCreators} initEmpty />
    </MultipleMonitors>
  </DockMonitor>
);
