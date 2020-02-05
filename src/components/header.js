import React from "react"
import { Button, Grid } from "semantic-ui-react"
import { NavLink } from "react-router-dom"

function Header(props) {
   return (
      <Grid padded>
         <Grid.Column textAlign="center">
            <NavLink to="/" replace>
               <Button color="orange">Login</Button>
            </NavLink>
            <NavLink to="/index" replace>
               <Button color="orange">Index</Button>
            </NavLink>
            <Button onClick={props.toggleTheme} color="facebook">
               Change Theme
            </Button>
         </Grid.Column>
      </Grid>
   )
}

export default Header
