# Redux DevTools Dispatch
Dispatch your actions manually to test if your app reacts well.

[![npm version](https://img.shields.io/npm/v/redux-devtools-dispatch.svg?style=flat-square)](https://www.npmjs.com/package/redux-devtools-dispatch)

![redux-devtools-dispatch](https://cloud.githubusercontent.com/assets/969003/12874321/2c3624ec-cdd2-11e5-9856-fd7e24efb8d5.gif)

### Installation

`npm install --save-dev redux-devtools-dispatch`

### Usage

You can declare your Dispatcher the same way you declare a Monitor in your Dev Tools.

```jsx
import React from 'react';
import { createDevTools } from 'redux-devtools';
import Dispatcher from 'redux-devtools-dispatch';

export default createDevTools(
  <Dispatcher />
);
```

You can inject action creators to ease the process of testing your app firing yourself actions.

```jsx
import React from 'react';
import { createDevTools } from 'redux-devtools';
import Dispatcher from 'redux-devtools-dispatch';

const actionCreators = {
  increment() {
    return {type: 'INCREMENT_COUNTER'};
  },
  decrement() {
    return {type: 'DECREMENT_COUNTER'};
  },
  nested: {
    worksToo() {
      return {type: 'NESTED_WORKS_TOO', cool: true};
    },
  },
};

export default createDevTools(
  <Dispatcher actionCreators={actionCreators} />
);
```

You can also use `<MultipleMonitors>` from [`redux-devtools-multiple-monitors`](https://github.com/YoruNoHikage/redux-devtools-multiple-monitors) to use multiple monitors into the `<DockMonitor>`:

```jsx
import React from 'react';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
    <MultipleMonitors>
      <LogMonitor />
      <Dispatcher />
    </MultipleMonitors>
  </DockMonitor>
);
```

Then, just write an JSON action in the field, click on Dispatch, and that's all!

### Props

Name                  | Description
-------------         | -------------
`theme`               | _Same as in LogMonitor's package_ Either a string referring to one of the themes provided by [redux-devtools-themes](https://github.com/gaearon/redux-devtools-themes) (feel free to contribute!) or a custom object of the same format. Optional. By default, set to [`'nicinabox'`](https://github.com/gaearon/redux-devtools-themes/blob/master/src/nicinabox.js).
`initEmpty`           | When `true`, the dispatcher is empty. By default, set to `false`, the dispatcher contains : `{ "type": "" }`.
`actionCreators`      | Either a array of action creators or an object containing action creators. When defined, a selector appears to choose the action creator you want to fire, you can fill up the arguments and dispatch the action.
`dispatchFn`          | Function to be called for dispatching actions. By default it is using component's `this.context.store.dispatch`. 

### Contributing

As this package is my first, any comment, pull request, issue is welcome so I can learn more from everyone.

### License

MIT
