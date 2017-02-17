import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

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

class DistancesConfiguration extends React.Component {
  componentWillMount() {
    this.props.fetchModels(this.props.session.key);
  }

  getChains() {
    this.props.fetchChains(this.props.session.key, document.getElementById('modelSelect').value)
  }

  getAtoms() {
    this.props.fetchAtoms(this.props.session.key, document.getElementById('modelSelect').value,
      document.getElementById('chainSelect').value)
  }

  sendData(event) {
    event.preventDefault();

    let chain = {};
    chain[document.getElementById('chainSelect').value] = {
      "residues": [],
      "atoms": {
        "first": document.getElementById('atomSelect1').value,
        "second": document.getElementById('atomSelect2').value
      }
    };

    let model = {};
    model[document.getElementById('modelSelect').value] = {
      "modelNumber": +document.getElementById('modelSelect').value,
      "chainSpecifications": chain
    };

    const form = {"modelSpecifications": model};
    this.props.fetchMatrix(this.props.session.key, JSON.stringify(form));
  }

  render() {
    return (
      <InputWrapper>
        <MyForm onSubmit={this.sendData.bind(this)}>
          <label for="modelSelect">Provide model number of a structure.</label>
          <input type="text" id="modelSelect" required/>
          <label for="chainSelect">Provide chain ID of a structure.</label>
          <input type="text" id="chainSelect" required/>
          <label for="atomSelect1">Provide atom1 ID of a structure.</label>
          <input type="text" id="atomSelect1" required/>
          <label for="atomSelect2">Provide atom2 ID of a structure.</label>
          <input type="text" id="atomSelect2" required/>
          <RaisedButton label="Submit" labelColor="#ffffff" backgroundColor="#00897b" type="submit"/>
        </MyForm>
      </InputWrapper>
    );
  }
}

export default DistancesConfiguration