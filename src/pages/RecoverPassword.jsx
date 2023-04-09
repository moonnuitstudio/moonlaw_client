import { 
    Box,
    Button,
    Typography
} from "@mui/material"

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { recoverPasswordSchema } from "../schemas";

import { styled } from "@mui/material/styles"
import { motion } from "framer-motion";

import { 
    useState,
    useMemo,
    useEffect
} from "react"

import { useMediaQuery } from 'react-responsive';

import undraw_forgot_password from '../assets/img/undraw_forgot_password.svg'

import ZInputField from "../components/forms/inputs/ZInputField";
  
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
        width: '80%',
        maxWidth: '700px',
        height: 'fit-content',
        borderRadius: '7px',
        boxShadow: '5px 5px 25px -12px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
        padding: '50px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
))
  

const RecoverPassword = () => {

    const methods = useForm({
        resolver: yupResolver(recoverPasswordSchema),
        resetOptions: {
            keepDirtyValues: true,
            keepErrors: true,
        }
    });

    const onSubmitAction = () => {

    }

    return (
        <Container>
            <CardContainer>
                <img src={undraw_forgot_password} width="300px" />

                <Typography variant="h2" component="p" fontWeight={800} color="primary" sx={{marginTop: '20px'}}>Did you forget your password?</Typography>
                <Typography sx={{marginTop: '-5px'}}>Type the email associated with the account</Typography>

                <FormProvider {...methods} >
                    <form className="w-100" onSubmit={methods.handleSubmit(onSubmitAction)}>
                        <Box sx={{ width: '100%', padding: '0px 30px', boxSizing: 'border-box', marginTop: '30px' }}>
                            <ZInputField label="Email" name="email" type="email" />

                            <Box sx={{display: 'flex', width: '100%', boxSizing: 'border-box', justifyContent: 'center'}}>
                                <Button type="submit" variant="contained">Recover Password</Button>
                            </Box>
                        </Box>
                    </form>
                </FormProvider>
            </CardContainer>
        </Container>
    )
}

export default RecoverPassword