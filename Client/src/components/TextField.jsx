import MuiTextField from '@mui/material/TextField';
import { DEFAULT_INPUT_VARIANT } from '../constants';

const TextField = ({
    label,
    variant= DEFAULT_INPUT_VARIANT
}) =>{
    return(
        <MuiTextField 
        fullWidth
       label={label}
        variant={variant}
        
         
        />
    )
}

export default TextField

// const TextField = (props) =>{
//     return(
//         <MuiTextField 
//         fullWidth
//        label={props.label}
//         variant={props.variant || DEFAULT_INPUT_VARIANT}
        
         
//         />
//     )
// }

