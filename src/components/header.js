import React from "react"
import { Button, Grid } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

function Header(props) {
   return (
      <Grid padded="vertically">
         <Grid.Column color="purple" textAlign="center">
            <NavLink to="/">
               <Button inverted basic content="Login"></Button>
            </NavLink>
            <NavLink to="/index">
               <Button
                  inverted
                  basic
                  content="Index"
                  icon="heart"
                  color="olive"
               ></Button>
            </NavLink>
         </Grid.Column>
      </Grid>
   )
}

export default Header
