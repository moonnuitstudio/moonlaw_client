import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { signupSchema } from "../../schemas";

import { 
    Box,
    Button,
    Typography,
    FormControl,
    Grid
} from "@mui/material"

import moonlawLogoSrc from '../../assets/img/moonlaw_logo.png' 

import ZInputField from "./inputs/ZInputField";

const SignUpForm = ({loginOption, isMobileOrTable}) => {

    const methods = useForm({
        resolver: yupResolver(signupSchema),
        resetOptions: {
            keepDirtyValues: true,
            keepErrors: true,
        }
    });

    const onSubmitAction = () => {

    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: isMobileOrTable? 'column' : 'row', 
                marginBottom: '20px',
                ...(isMobileOrTable && {
                    alignItems: 'center'
                })
            }}>
                <img src={moonlawLogoSrc} width={60} />
                <Box sx={{ 
                    paddingTop: '5px', 
                    marginLeft: isMobileOrTable? '0px' : '10px',
                    ...(isMobileOrTable && {
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems:'center'
                    })
                }}>
                    <Typography variant="h2" component="p" fontWeight={800} color="primary" sx={{}}>Sign Up</Typography>
                    <Typography sx={{marginTop: '-5px'}}>Connect with your clients on a new level</Typography>
                </Box>
            </Box>

            <FormProvider {...methods} >
                <form className="w-100" onSubmit={methods.handleSubmit(onSubmitAction)} >
                    <Grid container spacing={2}>
                        <Grid item xs={!isMobileOrTable? 6 : 12}>
                            <ZInputField label="First Name" name="firstname" />
                        </Grid>
                        <Grid item xs={!isMobileOrTable? 6 : 12} sx={isMobileOrTable && { marginTop: '-15px' }}>
                            <ZInputField label="Last Name" name="lastname" />
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: '-15px' }}>
                            <ZInputField label="Law Firm" name="lawfirm" />
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: '-15px' }}>
                            <ZInputField label="Email" name="email" type="email" />
                        </Grid>
                    </Grid>

                    <Box sx={{display: 'flex', width: '100%', boxSizing: 'border-box', justifyContent: 'flex-end'}}>
                        <Button type="submit" variant="contained">Sign Up</Button>
                    </Box>
                </form>
            </FormProvider>
            <Typography variant="body1" component="p" color="black" sx={{ width: '100%', textAlign: 'right', marginTop: '10px' }}>Do you have an account? <Typography onClick={loginOption} variant="body1" component="span" color="black" sx={{ fontWeight: 800, cursor: 'pointer' }}>Login</Typography></Typography>
        </Box>
    )
}

export default SignUpForm