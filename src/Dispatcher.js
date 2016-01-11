import React, { Component, PropTypes } from 'react';
import * as themes from 'redux-devtools-themes';

const styles = {
  button: {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '3px',
    padding: '3px',
    margin: '5px 3px',
    fontSize: '0.8em',
    textDecoration: 'none',
    border: 'none',
    position: 'absolute',
    bottom: '3px',
    right: '5px'
  },
  content: {
    margin: '5px',
    padding: '5px',
    borderRadius: '3px',
    outline: 'none',
    overflow: 'auto'
  },
};

export default class Dispatcher extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    dispatch: PropTypes.func,
    computedStates: PropTypes.array,
    actionsById: PropTypes.object,
    stagedActionIds: PropTypes.array,
    skippedActionIds: PropTypes.array,
    monitorState: PropTypes.shape({
      initialScrollTop: PropTypes.number
    }),

    initEmpty: PropTypes.bool,
    theme: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    select: (state) => state,
    theme: 'nicinabox',
    preserveScrollTop: true,
    initEmpty: false,
  };

  static update = () => {};

  constructor(props, context) {
    super(props, context);
  }

  launchAction() {
    this.context.store.dispatch(JSON.parse(this.refs.action.textContent.replace(/\s+/g, ' ')));
  }

  componentDidMount() {
    this.refs.action.innerHTML = this.props.initEmpty ? '<br/>' : '{<br/>"type": ""<br/>}';
  }

  getTheme() {
    let { theme } = this.props;
    if (typeof theme !== 'string') {
      return theme;
    }

    if (typeof themes[theme] !== 'undefined') {
      return themes[theme];
    }

    console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
    return themes.nicinabox;
  }

  render() {
    const theme = this.getTheme();

    return (
      <div style={{background: theme.base02, fontFamily: 'monaco,Consolas,Lucida Console,monospace'}}>
        <div contentEditable='true' style={{...styles.content, color: theme.base06, backgroundColor: theme.base00}} ref='action'></div>
        <button style={{...styles.button, color: theme.base06, backgroundColor: theme.base02}} onClick={this.launchAction.bind(this)}>Dispatch</button>
      </div>
    );
  }
}
