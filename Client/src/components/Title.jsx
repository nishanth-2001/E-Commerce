import Typography from "@mui/material/Typography";

const Title = ({ children, variant, style, component, handleClick }) => {
  return (
    <Typography
      variant={variant}
      style={style}
      component={component}
      onClick={handleClick}>
      {children}
    </Typography>
  );
};

export default Title;
