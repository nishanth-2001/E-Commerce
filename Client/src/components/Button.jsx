import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

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
const Button = ({
  children,
  color,
  style,
  handleClick,
  variant,
  type,
  loading,
  disabled,
}) => {
  return (
    <MuiButton
      color={color}
      style={style}
      onClick={handleClick}
      variant={variant}
      startIcon={
        loading ? <CircularProgress color="inherit" size={15} /> : undefined
      }
      disabled={disabled || loading}
      type={type}>
      {children}
    </MuiButton>
  );
};

export default Button;
