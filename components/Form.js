import React, { useState } from 'react';
import styled from 'styled-components'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  return {
    value: value,
    onChange: e => setValue(e.target.value)
  }
}

const Form = ({ onSubmit }) => {
  const firstName = useInputValue('')
  const lastName = useInputValue('')


  return (
    <StyledContainer>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmit(firstName.value)
      }}>
        <input {...firstName} placeholder='First Name' />
        <br />
        <input {...lastName} placeholder='Last Name' />

      </form>
      <br />
      <h4>{firstName.value}</h4>
      <h4>{lastName.value}</h4>

    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: 960px;
  padding: 1rem;
  margin: 0 auto;
`

export default Form