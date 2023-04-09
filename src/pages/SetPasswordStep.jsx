import { 
    Box,
    Button,
    Typography
} from "@mui/material"

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { setPasswordSchema } from "../schemas";

import { styled } from "@mui/material/styles"
import { motion } from "framer-motion";

import { 
    useState,
    useMemo,
    useEffect
} from "react"

import { useMediaQuery } from 'react-responsive';

import undraw_growing from '../assets/img/undraw_growing.svg'

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
  

const SetPasswordStep = () => {

    const methods = useForm({
        resolver: yupResolver(setPasswordSchema),
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
                <img src={undraw_growing} width="500px" />

                <Typography variant="h2" component="p" fontWeight={800} color="primary" sx={{marginTop: '20px'}}>Set Password</Typography>
                <Typography sx={{marginTop: '-5px'}}>Are you ready for the next level?</Typography>

                <FormProvider {...methods} >
                    <form className="w-100" onSubmit={methods.handleSubmit(onSubmitAction)}>
                        <Box sx={{ width: '100%', padding: '0px 30px', boxSizing: 'border-box', marginTop: '30px' }}>
                            <ZInputField label="Password" name="password" type="password" />

                            <ZInputField label="Confirm Password" name="confirmpassword" type="password" />

                            <Box sx={{display: 'flex', width: '100%', boxSizing: 'border-box', justifyContent: 'flex-end'}}>
                                <Button type="submit" variant="contained">Start</Button>
                            </Box>
                        </Box>
                    </form>
                </FormProvider>
            </CardContainer>
        </Container>
    )
}

export default SetPasswordStep