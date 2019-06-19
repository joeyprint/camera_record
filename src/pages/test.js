import React from 'react'
import { Button } from 'react-bootstrap'

class Test extends React.Component {
  render () {
    return (
      <div>
        <h1>Test test page</h1>
        <a href='/camera'>
          <Button className='btn-success'>Start Record</Button>
        </a>
      </div>
    )
  }
}

export default Test