import { Add } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Button variant="contained" startIcon={<TuneIcon />} color='secondary'>Settings</Button>
      <Button variant="contained" startIcon={<Add />} color='success'>Add New Post</Button>
      <Button variant="outlined" disable startIcon={<TuneIcon />}>Outlined</Button>
      <Typography variant='h1' component='p'> Titulo de la pagina</Typography>
    </div>
  );
}

export default App;
