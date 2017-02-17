<SelectField floatingLabelText="Model" value={1} id="modelSelect" onChange={this.getChains.bind(this)}>
  {this.props.session.models.map((e, i) => (
      <MenuItem value={i} label={e} primaryText={e}/>
    )
  )}
</SelectField>
<br/>
<MySelect floatingLabelText="Chain" defaultValue="" id="chainSelect">
  <option value=""></option>
  {this.props.session.chains.map((e, i) => (
      <option key={i} value={e}>{e}</option>
    )
  )}
</MySelect>






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