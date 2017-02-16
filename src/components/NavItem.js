import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    text-align: center;
    display: inline;
    height: inherit;
    width: auto;
    color: white;
`;

const aActive = styled.a`
  background-color: #00796b;
  color: white;
  text-decoration: none;
  padding: 0vh 3vh;
  margin: auto;
`;

const aNormal = styled.a`
  background-color: #00897b;
  color: white;
  text-decoration: none;
  height: inherit;
  padding: 0vh 3vh;
  margin: auto;
`;

class NavItem extends React.Component {

  hover(event) {
    document.getElementById(this.props.name).style.backgroundColor = "#00796b";
  }

  normal(event) {
    if (this.props.type === 'active') {
      document.getElementById(this.props.name).style.backgroundColor = "#00796b";
    } else {
      document.getElementById(this.props.name).style.backgroundColor = "#00897b";
    }
  }

  render() {
    if (this.props.type === 'active') {
      return (
      <Item>
        <aActive href={this.props.href} id={this.props.name} onClick={this.props.onClick} onMouseOver={this.hover.bind(this)} onMouseOut={this.normal.bind(this)}>
          {this.props.name}
        </aActive>
      </Item>
      );
    } else {
      return (
        <Item>
          <aNormal href={this.props.href} id={this.props.name} onClick={this.props.onClick} onMouseOver={this.hover.bind(this)} onMouseOut={this.normal.bind(this)}>
            {this.props.name}
          </aNormal>
        </Item>
      );
    }
  }
}

export default NavItem;