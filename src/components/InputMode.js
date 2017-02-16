import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  height: inherit;
  vertical-align: middle;
  align-items: center;
  display: flex;
`;

const Centered = styled.div`
  margin: auto;
`;

const MyButton = styled.button`
  margin: 10vh;
  height: 25vh;
  width: 44vh;
  background-color: #26a69a;
  border-bottom-color: #009688;
  border-bottom-style: solid;
  border-bottom-width: 16px;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 6vh;
`;

class InputMode extends React.Component {
  setInputMode(item, event) {
    if (item !== this.props.name) {
      this.props.setInputMode(item, 'INPUT')
    }
  }

  render() {
    return (
      <main>
        <ButtonWrapper>
          <Centered>
            <MyButton onClick={this.setInputMode.bind(this, "PDB_ID")}>
              <Title>Pdb Id</Title>
            </MyButton>
            <MyButton onClick={this.setInputMode.bind(this, "FILE")}>
              <Title>File</Title>
            </MyButton>
          </Centered>
        </ButtonWrapper>
      </main>
    );
  }
}

export default InputMode