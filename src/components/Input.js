import React from 'react';

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
            <div className="container">
              <form onSubmit={this.submit.bind(this)} id="fileInput">
                <input name="file" type="file" id="script_file" required/>
                <button className="waves-effect waves-light btn" type="submit">Submit
                </button>
              </form>
            </div>
          </main>
        );
      default:
        return (
          <main>
            <div className="container">
              <form>
                <input id="idInput" type="text"/>
                <button className="waves-effect waves-light btn" type="button" onClick={this.sendData.bind(this)}>Submit
                </button>
              </form>
            </div>
          </main>
        );
    }
  }
}

export default Input