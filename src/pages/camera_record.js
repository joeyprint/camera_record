import React from 'react'
import Camera from '../components/camera.js';

const videoJsOptions = {
  controls: true,
  width: 320,
  height: 240,
  fluid: false,
  plugins: {
    record: {
      audio: true,
      video: true,
      maxLength: 10,
      debug: true
    }
  }
};

class CameraRecord extends React.Component {
  render () {
    return (
      <div>
        <Camera {...videoJsOptions} />
      </div>
    )
  }
}

export default CameraRecord