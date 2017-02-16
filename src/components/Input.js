import React from 'react';
import Button from 'react-materialize';

class Input extends React.Component {

  sendData() {
    this.props.sendData(document.getElementById("idInput").value);
  }

  submit(event) {
    const form = new FormData(event.target);
    this.props.submitTaskForm(form);
    event.preventDefault();
  }

  render() {
    switch (this.props.inputMode) {
      case "FILE":
        return (
          <div>
            <form onSubmit={this.submit.bind(this)} id="fileInput">
              <input name="file" type="file" id="script_file" required/>
              <button type="submit">Submit
              </button>
            </form>
          </div>
        );
      default:
        return (
          <div>
            <form>
              <input id="idInput" type="text" required/>
              <button type="button" onClick={this.sendData.bind(this)}>Submit
              </button>
            </form>
          </div>
        );
    }
  }
}

export default Input