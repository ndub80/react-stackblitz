import React from 'react';
import styled from 'styled-components'


const Hello = ({ name }) => {

  return (
    <StyledContainer>
      <h1>Hello {name}!</h1>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: 960px;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
`

export default Hello