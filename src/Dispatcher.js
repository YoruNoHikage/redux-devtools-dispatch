import React, { Component, PropTypes } from 'react';

const buttonStyles = {
  cursor: 'pointer',
  fontWeight: 'bold',
  borderRadius: '3px',
  padding: '4px',
  margin: '5px 3px',
  fontSize: '0.8em',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: '#4F5A65',
  border: 'none',
  position: 'absolute',
  bottom: '3px',
  right: '5px'
};

const contentStyles = {
  background: '#2A2F3A',
  margin: '5px',
  padding: '5px',
  borderRadius: '3px',
  outline: 'none',
  color: 'white',
  overflow: 'auto'
};

export default class Dispatcher extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static update = () => {};

  constructor(props, context) {
    super(props, context);
  }

  launchAction() {
    this.context.store.dispatch(JSON.parse(this.refs.action.innerText.replace(/\s+/g, ' ')));
  }

  componentDidMount() {
    this.refs.action.innerText = this.props.initEmpty ? '\n' : `{
      "type": ""
    }`;
  }

  render() {
    return (
      <div style={{background: '#4F5A65', fontFamily: 'monaco,Consolas,Lucida Console,monospace'}}>
        <div contentEditable='true' style={contentStyles} ref='action'></div>
        <button style={buttonStyles} onClick={this.launchAction.bind(this)}>Dispatch</button>
      </div>
    );
  }
}
