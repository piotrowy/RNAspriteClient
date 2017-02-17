import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const InputWrapper = styled.div`
  min-height: 88vh;
  width: 100vh;
  margin: auto;
  vertical-align: middle;
  align-items: center;
  display: flex;
`;

const MyForm = styled.form`
  margin: auto;
`;

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
          <InputWrapper>
            <MyForm onSubmit={this.submit.bind(this)} id="fileInput">
              <label for="script_file">Provide PDB file of a structure.</label>
              <input name="file" type="file" id="script_file" required/>
              <RaisedButton label="Submit" labelColor="white" backgroundColor="#00897b" type="submit"/>
            </MyForm>
          </InputWrapper>
        );
      default:
        return (
          <InputWrapper>
            <MyForm>
              <label for="idInput">Provide PDB ID of a structure.</label>
              <input id="idInput" type="text" required/>
              <RaisedButton label="Submit" onClick={this.sendData.bind(this)} labelColor="white"
                            backgroundColor="#00897b" type="Button"/>
            </MyForm>
          </InputWrapper>

        );
    }
  }
}

export default Input