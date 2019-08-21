import React from 'react';
import BoxContainer from './components/BoxContainer';

class App extends React.Component {
  render() {
    console.log('function render()- class App');
    return <div><BoxContainer /></div>;
  }
}

export default App;
