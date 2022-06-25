import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Page from './Page';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Page products={this.props.products}/>
      </MuiThemeProvider>
    );
  }
}