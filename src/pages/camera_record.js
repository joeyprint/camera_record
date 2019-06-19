import React from 'react'
import Camera from '../components/camera.js';
import { Button } from 'react-bootstrap'

const videoJsOptions = {
  controls: true,
  width: 320,
  height: 240,
  loop: false,
  fluid: false,
  plugins: {
    record: {
      audio: true,
      video: true,
      maxLength: 10, //1200 seconds
      debug: true
    }
  }
};

class CameraRecord extends React.Component {

  render() {
    return (
      <div>
        {/* <Button onClick={deviceReady}>Start</Button> */}
        <Camera {...videoJsOptions} />
      </div>
    )
  }
}

export default CameraRecord