import MuiButton from "@mui/material/Button"
import { DEFAULT_INPUT_VARIANT } from "../constants"

// const Button = ({
//     label,
//     variant= DEFAULT_INPUT_VARIANT
// }) => {
//     return(
//         <MuiButton
//         label={label}
//         variant={variant}>

//         </MuiButton>
//     )
// }
const Button = ({ children, ...props}) => {
        return (
                <MuiButton {...props}>
                    {children}
                </MuiButton>
            )
        }
        
        export default Button
