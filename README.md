# Redux DevTools Dispatch
Dispatch your actions manually to test if your app reacts well.

[![npm version](https://img.shields.io/npm/v/redux-devtools-dispatch.svg?style=flat-square)](https://www.npmjs.com/package/redux-devtools-dispatch)

![redux-devtools-dispatch](https://cloud.githubusercontent.com/assets/969003/12130885/7f805b28-b40e-11e5-93bf-a0e13b2de807.gif)

### Installation

`npm install --save-dev redux-devtools-dispatch`

### Usage

You can declare your Dispatcher the same way you declare a Monitor in your Dev Tools.

```js
import React from 'react';
import { createDevTools } from 'redux-devtools';
import Dispatcher from 'redux-devtools-dispatch';

export default createDevTools(
  <Dispatcher />
);
```

You can also use `<MultipleMonitors>`, a hacky class to use multiple monitors into the `<DockMonitor>`:

```js
import React from 'react';

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-dispatch/lib/MultipleMonitors';

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
`initEmpty`           | When `true`, the dispatcher is empty. By default, set to `false`, the dispatcher contains : `{ "type": "" }`.

### Contributing

As this package is my first, any comment, pull request, issue is welcome so I can learn more from everyone.

### License

MIT
