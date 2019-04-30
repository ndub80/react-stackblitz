import React, { useState } from 'react';
import Hello from './Hello';
import Form from './components/Form'
import styled from 'styled-components'

const App = () => {
  const [name, setName] = useState()

  return (
    <Wrapper>
      <Hello name="Noah" />
      <Form onSubmit={x => console.log("app received First Name")}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: cornflowerblue;
  color: yellow;
  height: 100vh;
`

export default App