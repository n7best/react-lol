import ReactLOL from '../../src';
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components';

const CenterDiv = styled.div`
  position:absolute;
  left:50%;
  margin-left:-${props => props.width ? props.width / 2 : 512}px;
  top:50%;
  margin-top:-${props => props.height ? props.height / 2 : 384}px;
  width:${props => props.width ? props.width : 1024}px;
  height:${props => props.height ? props.height : 768}px;
  border: 1px solid ${ReactLOL.Colors.border_main};
  backgroundColor: ${ReactLOL.Colors.bg_main};
  borderTop: 2px solid ${ReactLOL.Colors.border_gold_normal};
`
const ToolBar = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  textAlign: right;

  & i{
    color: #9C9788;
    margin: 0 10px;
    cursor: pointer;
  }

  & i:hover {
    color: #EDE3CF;
  }
`

const rootEl = document.getElementById('root')

const styles = {
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    position: 'relative',
    letterSpacing: '1px'
  }
}

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <CenterDiv width={this.props.width} height={this.props.height}>
          <div style={{
            height: '100%',
            width: `${this.props.width - 250}px`,
            float: 'left',
            backgroundImage: 'url(http://na.leagueoflegends.com/sites/default/files/upload/art/bg_champion_teemo_1920x1080.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'right'
          }}>

          </div>

          <div style={{
            height: `${this.props.height - 10}px`,
            width: '239px',
            float: 'right',
            textAlign: 'center',
            borderLeft: `1px solid ${ReactLOL.Colors.border_main}`,
            padding: '5px',
            position: 'relative'
          }}>
            <ToolBar>
              <i className="fa fa-search" ></i>
              <i className="fa fa-cog" ></i>
              <i className="fa fa-github" ></i>
            </ToolBar>
            <img src="images/logo.png" width="60%"/>
            <h5 style={{color: '#EDE3CF'}}>A React library look like LOL</h5>
            <p style={{color: '#9B9184', fontSize: '12px' }}>Maybe you can use it on the next game project</p>
            <br/>
            <ReactLOL.Button>GET STARTED</ReactLOL.Button>
            <p />
            <ReactLOL.Button primary>DOCUMENTATION</ReactLOL.Button>
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              textAlign: 'center',
              width: '100%',
              height: '30px',
              lineHeight: '30px',
              fontSize: '12px',
              color: '#3C3C41',
              borderTop: `1px solid ${ReactLOL.Colors.border_main}`,
            }}>
              V{ReactLOL.Version}
            </div>
          </div>

        </CenterDiv>
      </div>
    );
  }
}

ReactDOM.render(<App width={1274} height={700}/>, rootEl);