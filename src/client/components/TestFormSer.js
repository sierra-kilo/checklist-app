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
    var result = Object.keys(obj).map(function(key) {
      return [Number(key), obj[key]];
    })
    console.log(result);
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
              <input type="radio" name="1" value='1' /> YES

              <input type="radio" name="1" value='2'/> NO

              <input type="radio" name="1" value='3'/> N/A

          </li>
          <li>
              <input type="radio" name="2" value='1' /> YES

              <input type="radio" name="2" value='2'/> NO

              <input type="radio" name="2" value='3'/> N/A

          </li>
          <li>
              <input type="radio" name="3" value='1' /> YES
              <input type="radio" name="3" value='2'/> NO

              <input type="radio" name="3" value='3'/> N/A

          </li>
        </ul>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default TestForm;
