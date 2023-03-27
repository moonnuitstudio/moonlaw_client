import { 
  Box,
} from "@mui/material"

import { styled } from "@mui/material/styles"

import { useState } from "react"

const Container = styled(Box)(({theme}) => ({
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}))

const CardContainer = styled(Box)(({theme}) => ({
  background: '#f2f2f2',
  width: '90%',
  maxWidth: '1100px',
  height: '80%',
  maxHeight: '600px',
  borderRadius: '7px',
  boxShadow: '5px 5px 25px -12px rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}))

const ColumnItem = styled(Box, { shouldForwardProp: (prop) => prop !== 'grow' })(({theme, grow}) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...(grow && {
    flexGrow: `${grow}`,
  })  
}))

const NoAuthPage = () => {

  const [option, setOption] = useState(true)

  return (
    <Container>
      <CardContainer>
        <ColumnItem grow={2}></ColumnItem>
        <ColumnItem grow={1}>Item 2</ColumnItem>
      </CardContainer>
    </Container>
  )
}

export default NoAuthPage