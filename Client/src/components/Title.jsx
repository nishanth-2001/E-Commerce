import Typography from '@mui/material/Typography';
import { APP_NAME } from '../constants';

const Title = ({ children, variant, style}) => {
  return (
    <Typography variant={variant} style={style} gutterBottom>
     Register with {APP_NAME}
      </Typography>
  )
}

export default Title