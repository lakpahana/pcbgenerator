import { Container,Box, Grid, Typography, TextField, Toolbar, Button } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import { useState } from "react";
function App() {

  //states for input values
  const [gain, setGain] = useState(null);
  const [bandwidth, setBandwidth] = useState(null);
  return (
    <Container>
      {/* simple toolbar with App Name */}
      <Toolbar

      >
        <CalculateIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" component="div">
          PCB Calculator
        </Typography>

        <Button
          onClick={() => {
            window.location.href = "https://github.com/lakpahana"
          }
          }
          variant="outlined" sx={{
            marginLeft: "auto"



          }}>contribute</Button>
      </Toolbar>
      <Grid container spacing={2} >
        <Grid item xs={4}>

          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center"
            }}
          >Input Details</Typography>


          <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            gap:2
          
          }}
          >
            <TextField 
            
            onChange={(e)=>{
              setGain(e.target.value)
            }
            }
            id="outlined-basic"
            value={gain}
            label="Gain" variant="outlined" 
            type="number"/>
            <TextField
             onChange={(e)=>{
              setBandwidth(e.target.value)
             }}
            id="outlined-basic" label="BandWidth" 
            type="number"
            value={bandwidth} variant="outlined" />
          </Box>










        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center"
            }}
          >Output Details</Typography>	
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
