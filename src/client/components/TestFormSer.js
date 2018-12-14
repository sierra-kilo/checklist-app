import React, { Component } from 'react';
var serialize = require('form-serialize');

class TestForm extends Component {

  constructor(props) {
    super(props);

    this.seeData = this.seeData.bind(this)
  }

  seeData = () => {
    let form = document.querySelector('.TestForm')
    let obj = serialize(form, { hash: true });
    console.log(obj)
  }


  render() {
    return (
      <div>
      <form className="TestForm"
        onSubmit={(e) => {
          e.preventDefault()
          console.log('clicked')
          this.seeData()
        }}>
        <ul>
          <li>
              <input type="radio" name="whatever item" value="YES" /> YES

              <input type="radio" name="whatever item" value="NO"/> NO

              <input type="radio" name="whatever item" value="N/A"/> N/A

          </li>
          <li>
              <input type="radio" name="whatever item 2" value="YES" /> YES

              <input type="radio" name="whatever item 2" value="NO"/> NO

              <input type="radio" name="whatever item 2" value="N/A"/> N/A

          </li>
          <li>
              <input type="radio" name="whatever item 3" value="YES" /> YES
              <input type="radio" name="whatever item 3" value="NO"/> NO

              <input type="radio" name="whatever item 3" value="N/A"/> N/A

          </li>
        </ul>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default TestForm;
