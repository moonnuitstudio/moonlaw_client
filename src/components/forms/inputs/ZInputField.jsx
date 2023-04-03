import { useFormContext } from "react-hook-form";
import { useMemo, useState, useRef } from "react";

import { 
    TextField,
    FormControl
} from "@mui/material" 

const ZInputField = ({name, label, type="text"}) => {
  const { register, formState: { errors } } = useFormContext();

  const hasError = useMemo(() => errors && !!errors[name], [errors])

  const errMessage = useMemo(() => hasError && errors[name].message.replace(name, label), [hasError])

  return (
    <FormControl sx={{width: '100%', marginBottom: '20px'}} variant="outlined">

    </FormControl>
    <TextField type={type} sx={{}} label={label} error={hasError} helperText={errMessage} {...register(name)}/>
  )
}

export default ZInputField