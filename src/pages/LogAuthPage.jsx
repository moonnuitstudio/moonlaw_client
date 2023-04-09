import { 
  Box,
  Button,
  Typography
} from "@mui/material"

import { styled } from "@mui/material/styles"
import { motion } from "framer-motion";

import { 
  useState,
  useMemo,
  useEffect
} from "react"

import { useMediaQuery } from 'react-responsive';

import LoginForm from "../components/forms/LoginForm";
import SignUpForm from "../components/forms/SignUpForm";

const Container = styled(Box)(({theme}) => ({
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}))

const CardContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'isMobileOrTable' && prop !== 'isMobile' })
  (({theme, isMobileOrTable, isMobile}) => (
    {
      background: '#f2f2f2',
      width: '90%',
      maxWidth: '1100px',
      height: '80%',
      maxHeight: `${ isMobileOrTable? '1000px' : '600px' }`,
      borderRadius: '7px',
      boxShadow: '5px 5px 25px -12px rgba(0,0,0,0.5)',
      position: 'relative',
      overflow: 'hidden',
      ...(isMobileOrTable && {
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }),
      ...(isMobile && {
        height: 'fit-content',
        padding: '40px 20px',
      })
    }
))

const ColumnItem = styled(Box, { shouldForwardProp: (prop) => prop !== 'elWidth' && prop !== 'posX' })(({theme, elWidth, posX}) => ({
  height: '100%',
  width: `${elWidth}%`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  transition: 'all ease .25s',
  ...(posX)
}))

const columnItemInitStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '0',
  transition: 'all ease .25s',
}

const columnImgLoginOptionStyle = {
  width: '65%', 
  left: '0',
  boxShadow: '10px 0px 15px -10px rgba(0,0,0,0.5)',
  transition: 'all ease .2s',
  zIndex: 999,
  ...(columnItemInitStyle)
}

const columnImgSignUpStyleEnd = {
  width: '40%', 
  left: '60%',
  boxShadow: '-10px 0px 15px -10px rgba(0,0,0,0.5)',
  transition: 'all ease .2s',
  zIndex: 999,
  ...(columnItemInitStyle)
}

const columnFormLoginStyle = {
  width: '35%', 
  right: '0',
  padding: '0px 20px',
  boxSizing: 'border-box',
  ...(columnItemInitStyle)
}

const columnFormSignUpStyle = {
  width: '60%', 
  right: '40%',
  padding: '0px 20px',
  boxSizing: 'border-box',
  ...(columnItemInitStyle)
}

const communImgItemStyle = {
  width: '100%', 
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const LogAuthPage = () => {

  // True -> Login Form / False -> Sign Up Form
  const [option, setOption] = useState(true) 

  const isMobileOrTable = useMediaQuery({ query: `(max-width: 1200px)` });
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  const showSignUpPage = () => setOption(false)
  const showLoginPage = () => setOption(true)

  return (
    <Container>
      <CardContainer isMobileOrTable={isMobileOrTable} isMobile={isMobile}>
        {
          !isMobileOrTable ?
          (
            <>
              <motion.div style={option? columnImgLoginOptionStyle : columnImgSignUpStyleEnd} layout transition={spring}>
                {option? (
                  <Box className="shadow-after" sx={{ 
                    background: "url('img/login_lawoffice.jpg')", 
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    ...(communImgItemStyle)
                  }}>
                    <Typography variant="h1" component="h3" color="white" sx={{zIndex: '999', marginBottom: '-5px'}}>{import.meta.env.VITE_APP_NAME}</Typography>
                    <Typography variant="h6" component="p" fontWeight={300} color="white" sx={{zIndex: '999', textTransform: 'capitalize'}}>strengthen connections with your clients</Typography>
                  </Box>
                ) : (
                  <Box className="shadow-after" sx={{
                    background: "url('img/signup_lawoffice.jpg')", 
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    ...(communImgItemStyle)
                  }}>
                    <Typography variant="h1" component="h3" color="white" sx={{zIndex: '999', marginBottom: '-5px'}}>{import.meta.env.VITE_APP_NAME}</Typography>
                  </Box>
                )}
              </motion.div>
              <motion.div style={option? columnFormLoginStyle : columnFormSignUpStyle} layout transition={spring}>
                {
                  option? (
                    <LoginForm signUpOption={showSignUpPage} />
                  ) : (
                    <SignUpForm loginOption={showLoginPage} />
                  )
                }
              </motion.div>
            </>
          ) : (
            option? (
              <LoginForm signUpOption={showSignUpPage} />
            ) : (
              <SignUpForm loginOption={showLoginPage} isMobileOrTable={isMobileOrTable} />
            )
          )
        }
      </CardContainer>
    </Container>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default LogAuthPage