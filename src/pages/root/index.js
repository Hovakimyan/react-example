// @flow

import React from 'react'
import * as Styled from './styled'
import reactLogo from 'assets/react-icon.png'

const Root = (): React$Node => {
    return (
        <Styled.Container>
            <Styled.Image src={reactLogo} alt="React app example" />
        </Styled.Container>
    )
}

export default Root
