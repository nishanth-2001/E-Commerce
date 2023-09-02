import MuiButton from "@mui/material/Button"

const Button = ({ children, ...props}) => {
    return (
        <MuiButton {...props}>
            {children}
        </MuiButton>
    )
}

export default Button