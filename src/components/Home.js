import React from 'react';
import styled from 'styled-components';

const vertical = {
  'verticalAlign': 'middle'
};

const About = styled.div`
  font-size: 1.5em;
  text-align: justify;
  margin:  auto;
  width: 80vw;
`;

class Home extends React.Component {
  render() {
    return (
      <main style={vertical}>
        <About>
          <br/>
          <h2>RNAsprite - a tool to calculate RNA structural data</h2>
          <br/>
          <p>RNA three-dimensional fold can be defined by different structural
            parameters which constitute various structure representations and give
            other perspective on the molecule shape. RNAsprite is a tool capable of
            providing structure description in various notations (algebraic,
            trigonometric, and geometric) and converting between them.
            It also allows to compute non-typical torsional angles (defined by the
            user), find intra-molecular distances between user-selected atoms, and
            visualize the results in heat map representation.</p>
        </About>
      </main>
    );
  }
}

export default Home