import { useFormContext } from "react-hook-form";
import { useMemo, useState, useRef } from "react";

import { 
  TextField,
  IconButton,
  InputAdornment
} from "@mui/material" 

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ZInputField = ({name, label, type="text"}) => {
  const { register, formState: { errors } } = useFormContext();

  const [showPassword, setShowPassword] = useState(false)

  const hasError = useMemo(() => errors && !!errors[name], [errors])

  const errMessage = useMemo(() => hasError && errors[name].message.replace(name, label), [hasError, errors])

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const isPassword = type.trim() === 'password'

  return (
    <TextField 
      type={ !isPassword? type: (showPassword ? 'text' : 'password')} 
      sx={{width: '100%', marginBottom: '20px'}} 
      variant="outlined" 
      label={label} 
      error={hasError} 
      helperText={errMessage} 
      InputProps={{
        endAdornment: isPassword?
        (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
      {...register(name)}
    />
  )
}

export default ZInputField