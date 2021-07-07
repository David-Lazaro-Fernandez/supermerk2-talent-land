import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import './navbar.css'
import TextField from '@material-ui/core/TextField'

function NavBar(){
    return(
        <div>
              <Grid
                className="navBar"
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"   
              >
                {/**Logo **/}
                <Grid item xl={3}>
                    <img src='/img/supermerk2 logo.png'/>
                </Grid>
                
                
                {/**Search Bar**/}
                <Grid item xl={5}>
                    <div>
                        <TextField
                          className="searchBar"
                          id="Search"
                          variant="outlined"
                          label="Busca tus productos locales o foraneos"
                          placeholder="La mejor carne de Monterrey"
                          style={{borderRadius:"25px"}}
                        />
                    </div>
                </Grid>
                <Grid item xl={1}></Grid>
                {/**Profile picture**/}
                <Grid item xl={1}>
                    <div className="profile">
                        <img src='/img/profile.png' />
                    </div>
                </Grid>
                {/**Love icon**/}
                <Grid item xl={1}>
                    <div className="roundIcon">
                        <img src='/img/love.png' />
                    </div>
                </Grid>
                {/**Shopping cart icon**/}
                <Grid item xl={1}>
                    <div className="roundIcon">
                        <img src='/img/shoppingCart.png' />
                    </div>
                </Grid>
                
              </Grid>
        </div>
    )
}

export default NavBar;