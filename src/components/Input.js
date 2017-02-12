import React from 'react';

class Input extends React.Component {

  sendData() {
    this.props.sendData('test');
  }

  render() {
    return (
      <main>
        <div className="container">
          <form>
            <input type="text"/>
            <button className="waves-effect waves-light btn" type="submit" onClick={this.sendData.bind(this)}>Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
}

export default Input