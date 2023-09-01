import { Container, Box, Grid, Typography, TextField, Toolbar, Button } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import { useEffect, useState } from "react";
import { calculateIc, calculateIb, calculateRC, calculateRB, calculateCin, calculateCout } from "./Calculations.js";

function App() {

  //states for input values
  const [gain, setGain] = useState(null);
  const [bandwidth, setBandwidth] = useState(null);
  const [vcc, setVcc] = useState(10);
  const [beta, setBeta] = useState(100);
  const [vbe, setVbe] = useState(0.7);
  const [RE, setRE] = useState(100);
  const [cutOff, setCutOff] = useState(100);

  //states for output values
  const [Ic, setIc] = useState(0);
  const [Ib, setIb] = useState(0);
  const [RC, setRC] = useState(0);
  const [RB, setRB] = useState(0);
  const [Cin, setCin] = useState(0);
  const [Cout, setCout] = useState(0);

  useEffect(() => {
    async function calculate() {

      console.log(gain, bandwidth, vcc, beta, vbe)
      if (gain && bandwidth && vcc && beta && vbe && cutOff && RE) {
        console.log("all values are present")
        // Calculate collector current (Ic)
        const Ic = calculateIc(gain, beta);
        // Calculate base current (Ib)
        const Ib = calculateIb(Ic, beta);
        // Calculate collector resistor (RC)
        const RC = calculateRC(vcc, Ic);
        // Calculate base resistor (RB)
        const RB = calculateRB(vcc, vbe, Ib);
        // Calculate input capacitor (Cin) and output capacitor (Cout)

        const Cin = calculateCin(RB, cutOff);
        const Cout = calculateCout(RC, bandwidth);
        // console.log(Cin, Cout)
        setIc(Ic);
        setIb(Ib);
        setRC(RC);
        setRB(RB);
        setCin(Cin);
        setCout(Cout);

      }
    }
    calculate();

  }, [
    gain, bandwidth, vcc, beta, vbe, cutOff, RE
  ])

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
            window.location.href = "https://github.com/lakpahana/pcbgenerator"
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
              display: "flex",
              flexDirection: "column",
              gap: 2

            }}
          >
            <TextField

              onChange={(e) => {
                setGain(e.target.value)
              }
              }
              id="outlined-basic"
              value={gain}
              label="Gain" variant="outlined"
              type="number" />
            <TextField
              onChange={(e) => {
                setBandwidth(e.target.value)
              }}
              id="outlined-basic" label="BandWidth"
              type="number"
              value={bandwidth} variant="outlined" />


            {/* textfields for Vcc , Beta, Vbe */}

            <TextField id="outlined-basic"

              onChange={(e) => {
                setVcc(e.target.value)
              }
              }
              value={vcc}
              label="Vcc" variant="outlined" />
            <TextField
              onChange={
                (e) => {
                  setBeta(e.target.value)
                }
              }
              value={beta}
              id="outlined-basic" label="Beta" variant="outlined" />
            <TextField

              onChange={
                (e) => {
                  setVbe(e.target.value)
                }
              }
              value={vbe}
              id="outlined-basic" label="Vbe" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Emitter Resistance"
              variant="outlined"
              value={RE}
              onChange={(e) => {
                setRE(e.target.value)
              }} />

            <TextField id="outlined-basic" label="Cut Off Frequency" variant="outlined" value={cutOff} onClick={(e) => {
              setCutOff(e.target.value)
            }
            } />
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2

            }}
          >
            {/* //label */}
            <TextField id="outlined-basic" label="Collector Current" variant="outlined" value={Ic}
              inputProps={

                {
                  readOnly: true
                }
              }
            />
            <TextField id="outlined-basic" label="Base Current" variant="outlined" value={Ib} inputProps={

              {
                readOnly: true
              }
            } />
            <TextField id="outlined-basic" label="Collector Resistor" variant="outlined" value={RC} inputProps={

              {
                readOnly: true
              }
            } />
            <TextField id="outlined-basic" label="Base Resistor" variant="outlined" value={RB} inputProps={

              {
                readOnly: true
              }
            } />
            <TextField id="outlined-basic" label="Input Capacitor" variant="outlined" value={Cin} inputProps={

              {
                readOnly: true
              }
            } />
            <TextField id="outlined-basic" label="Output Capacitor" variant="outlined" value={Cout} inputProps={

              {
                readOnly: true
              }
            } />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
