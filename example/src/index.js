import ReactLOL from '../../src';
import React from 'react'
import ReactDOM from 'react-dom'

const rootEl = document.getElementById('root')

const styles = {
  container: {
    backgroundColor: ReactLOL.Colors.bg_main,
    width: '100%',
    height: '100%',
    padding: '10px'
  }
}

class App extends React.Component {
  render() {
    return (
        <div style={styles.container}>
            <ReactLOL.Button>SIGN IN</ReactLOL.Button>
        </div>
    );
  }
}

ReactDOM.render(<App />, rootEl);