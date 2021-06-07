import React, { useState } from 'react'
import {Helmet} from 'react-helmet';
import earth from './assets/earth.png';
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper } from "@material-ui/core"
import "./App.css";
import WeatherTable from "./components/WeatherTable"
import { getWeatherApi } from "./api.js"
import { utils } from './utils';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '100%',
    margin: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'black',
  }
}))

function App() {

  const [city, setCity] = useState("")
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState(null)
  const classes = useStyles();

  const handleSubmit = async () => {
    const data = await getWeatherApi(inputCity)
    console.log(data)
    const utilsData = utils(data)
    setData(utilsData)
    setCity(inputCity)
  }

  return (
    <div className="containers">
      <Helmet>
        <style>{'body { background-color: black; }'}</style>
      </Helmet>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1><span>Weather Forecast</span><span></span> App</h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div className="hover-zoom">
              <img src={earth} width="100%" alt="" object-fit= 'contain' data-testid="img"/>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={6} spacing={12} >
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <select className="city-input" defaultValue={'DEFAULT'} onChange={(event) => setInputCity(event.target.value) }>
                <option disabled value="DEFAULT">
                  Choose a city
                </option>
                  <option value='Jakarta'> Jakarta </option>
                  <option value='Singapore'> Singapore </option>
                  <option value='Bangkok'> Bangkok </option>
              </select>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <button className="bn39" onClick={() => handleSubmit()}><span className="bn39span" data-testid="button">Button</span></button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <WeatherTable city={city} data={data} />
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
