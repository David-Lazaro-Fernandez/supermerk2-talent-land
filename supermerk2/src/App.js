import React,{} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import Grid from '@material-ui/core/Grid'
import { productos } from './components/products/productArray';

import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

function App() {
  const prodArr = productos.map(prod =>{
    return (
      <Grid item xl={2}>
        <Card>
                <CardHeader
                avatar={
                    <Avatar aria-label="Logo de la empresa" src={prod.sellerImg} />
                }
                action={
                    <IconButton aria-label="">
                    <MoreVertIcon />
                    </IconButton>
                }
                
                />
                <CardMedia
                  style={{paddingTop: '56.25%', width:"100%"}}
                  title="a"
                  image={prod.img}
                />
                <CardContent>
                    <Typography variant="h5">{prod.title}</Typography>
                    <Typography variant="h7">{prod.description}</Typography>
                </CardContent>
                
            </Card>
      </Grid>
    )
  })
  return (
    <div className="App">
        <NavBar />
        <Grid
          style={{marginTop:"20px"}}
          container
          spacing={5}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          
         {prodArr}
        </Grid>
        <Grid
          style={{marginTop:"20px"}}
          container
          spacing={5}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          
         {prodArr}
        </Grid>
        <Grid
          style={{marginTop:"20px"}}
          container
          spacing={5}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          
         {prodArr}
        </Grid>
    </div>
  );
}

export default App;
