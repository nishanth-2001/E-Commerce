import MuiContainer from "@mui/material/Container";
const Container = (props) => {
  return (
    <MuiContainer
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {props.children}
    </MuiContainer>
  );
};

export default Container;
