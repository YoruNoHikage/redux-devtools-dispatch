import React, { Component, cloneElement } from 'react';

function childrenMonitorState(props, state, action) {
  return props.children.map(child => child.type.update(child.props, state, action));
}

function reducer(props, state = {}, action) {
  return {
    childrenMonitorState: childrenMonitorState(props, state.childMonitorState, action)
  };
}

const defaultStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export default class MultipleMonitors extends Component {
  static update = reducer;

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { monitorState, children, style = defaultStyle, ...rest } = this.props;

    const monitors = children.map((e, i) => cloneElement(e, {
      ...rest,
      monitorState: monitorState.childrenMonitorState[i],
      key: 'monitor' + i
    }));

    return (
      <div style={style}>
        {monitors}
      </div>
    );
  }
}
