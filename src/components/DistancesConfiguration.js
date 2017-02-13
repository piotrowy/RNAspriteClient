import React from 'react';
import { Button } from 'react-bootstrap';

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
      <main>
        <form onSubmit={this.sendData.bind(this)}>
          <select defaultValue="" id="modelSelect" onChange={this.getChains.bind(this)}>
            <option value=""></option>
            {this.props.session.models.map((e, i) => (
                <option key={i} value={e}> {e} </option>
              )
            )}
          </select>
          <select defaultValue="" id="chainSelect" onChange={this.getAtoms.bind(this)}>
            <option value=""></option>
            {this.props.session.chains.map((e, i) => (
                <option key={i} value={e}> {e} </option>
              )
            )}
          </select>
          <select defaultValue="" id="atomSelect1">
            <option value=""></option>
            {this.props.session.atoms.map((e, i) => (
                <option key={i} value={e}> {e} </option>
              )
            )}
          </select>
          <select defaultValue="" id="atomSelect2">
            <option value=""></option>
            {this.props.session.atoms.map((e, i) => (
                <option key={i} value={e}> {e} </option>
              )
            )}
          </select>
          <Button type="submit">Submit</Button>
        </form>
      </main>
    );
  }
}

export default DistancesConfiguration