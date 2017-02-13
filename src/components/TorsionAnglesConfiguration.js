import React from 'react';
import {Checkbox, Button} from 'react-bootstrap';

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
      <main>
        <form onSubmit={this.sendData.bind(this)}>
          <select defaultValue="" id="modelSelect" onChange={this.getChains.bind(this)}>
            <option value=""></option>
            {this.props.session.models.map((e, i) => (
                <option key={i} value={e}> {e} </option>
              )
            )}
          </select>
          <select defaultValue="" id="chainSelect">
            <option value=""></option>
            {this.props.session.chains.map((e, i) => (
                <option key={i} value={e}> {e} </option>
              )
            )}
          </select>
          <div id="checkboxes">
            {Object.keys(angles).map((e) => (
              <Checkbox type="checkbox" name={angles[e]} value={angles[e]}> {e} </Checkbox>
              )
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </main>
    );
  }
}

export default TorsionAnglesConfiguration