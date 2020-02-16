import React, { FC } from 'react'
import { Container, SpinnerContainer, StyledSpinner } from 'styles/components/loading'

const Loading: FC = () => {
  return (
    <Container>
      <SpinnerContainer>
        <StyledSpinner viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
        </StyledSpinner>
      </SpinnerContainer>
    </Container>
  )
}

export default Loading
