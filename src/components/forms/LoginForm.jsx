import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schemas'

import { 
    Box,
    Button,
    Typography,
    FormControl 
} from "@mui/material"

import { Link } from "react-router-dom";

import ZInputField from "./inputs/ZInputField"

import moonlawLogoSrc from '../../assets/img/moonlaw_logo.png' 

const LoginForm = ({signUpOption}) => {

    const methods = useForm({
        resolver: yupResolver(loginSchema),
        resetOptions: {
            keepDirtyValues: true,
            keepErrors: true,
        }
    });

    const onSubmitAction = () => {

    }

    return (
        <>
            <img src={moonlawLogoSrc} width={60} />

            <FormProvider {...methods} >
                <form className="form-center" onSubmit={methods.handleSubmit(onSubmitAction)} >
                    <Typography sx={{marginTop: '-5px'}}>Wellcome Back</Typography>
                    <Typography variant="h2" component="p" fontWeight={800} color="primary" sx={{marginTop: '-5px', marginBottom: '20px'}}>Login</Typography>

                    <ZInputField label="Email" name="email" />

                    <ZInputField label="Password" name="password" type="password" />

                    <Box style={{ width: '100%', display: 'flex', justifyContent: "flex-end" }}><Link to="/recover-password" style={{ textDecoration: 'none' }}><Typography variant="body1" component="p" color="black" >Did you forget your password?</Typography></Link></Box>

                    <Box sx={{display: 'flex', width: '100%', padding: '15px 0px', boxSizing: 'border-box', justifyContent: 'flex-end'}}>
                        <Button type="submit" variant="contained">Login</Button>
                    </Box>

                    <Typography variant="body1" component="p" color="black" sx={{ width: '100%', textAlign: 'right' }}>Don't have an account yet? <Typography onClick={signUpOption} variant="body1" component="span" color="black" sx={{ fontWeight: 800, cursor: 'pointer' }}>Sign up</Typography></Typography>
                </form>
            </FormProvider>
        </>
    )
}

export default LoginForm