import React from 'react';
import styled from 'styled-components';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
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

const MySelect = styled.select`
`;

const angles = {
  "α": 'ALPHA',
  "β": 'BETA',
  "γ": 'GAMMA',
  "δ": 'DELTA',
  "ε": 'EPSILON',
  "ζ": 'ZETA',
  "ν0": 'NU0',
  "ν1": 'NU1',
  "ν2": 'NU2',
  "ν3": 'NU3',
  "ν4": 'NU4',
  "η": 'ETA',
  "θ": 'THETA',
  "η'": 'ETA_PRIM',
  "θ'": 'THETA_PRIM',
  "χ": 'CHI',
  "P": 'PSEUDOPHASE_PUCKER',
  "All": 'ALL'
};

class TorsionAnglesConfiguration extends React.Component {
  componentWillMount() {
    this.props.fetchModels(this.props.session.key);
  }

  getChains() {
    this.props.fetchChains(this.props.session.key, document.getElementById('modelSelect').value)
  }

  sendData(event) {
    event.preventDefault();

    let chain = {};
    chain[document.getElementById('chainSelect').value] = [... document.getElementsByTagName("input")]
      .filter(e => e.type === 'checkbox' && e.checked)
      .map((e) => (e.name));

    let model = {};
    model[document.getElementById('modelSelect').value] = {
      "modelNumber": +document.getElementById('modelSelect').value,
      "chainSpecifications": chain
    };
    const form = {"modelSpecifications": model};
    console.log(form);
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
          <br/>
          <div id="checkboxes">
            {Object.keys(angles).map((e) => (
                <Checkbox name={angles[e]} label={e}/>
              )
            )}
          </div>
          <RaisedButton label="Submit" labelColor="#ffffff" backgroundColor="#00897b" type="submit"/>
        </MyForm>
      </InputWrapper>
    );
  }
}

export default TorsionAnglesConfiguration