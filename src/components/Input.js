import React from 'react';
import {Panel, Button} from 'react-bootstrap';

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
    switch(this.props.inputMode) {
      case "FILE":
        return (
          <main>
            <Panel className="middle">
              <form onSubmit={this.submit.bind(this)} id="fileInput">
                <input name="file" type="file" id="script_file" required/>
                <Button type="submit">Submit
                </Button>
              </form>
            </Panel>
          </main>
        );
      default:
        return (
          <main>
            <Panel className="middle">
              <form>
                <input id="idInput" type="text" required/>
                <Button type="button" onClick={this.sendData.bind(this)}>Submit
                </Button>
              </form>
            </Panel>
          </main>
        );
    }
  }
}

export default Input