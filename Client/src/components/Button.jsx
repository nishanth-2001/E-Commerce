import MuiButton from "@mui/material/Button";

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
const Button = ({ children, color, style, handleClick, variant, type }) => {
  return (
    <MuiButton
      color={color}
      style={style}
      onClick={handleClick}
      variant={variant}
      type={type}>
      {children}
    </MuiButton>
  );
};

export default Button;
