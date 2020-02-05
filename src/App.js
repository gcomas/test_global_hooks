import React, { useState } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Index from "./sites/index"
import Login from "./sites/login"
import UseDarkMode from "./helpers/useDarkMode"
import { lightTheme, darkTheme } from "./helpers/myTheme"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./helpers/global"

function App() {
   const [theme, toggleTheme] = UseDarkMode()

   return (
      <div className="App">
         <Router>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
               <GlobalStyles />
               <Header toggleTheme={() => toggleTheme()}></Header>
               <Switch>
                  <Route component={Login} exact path="/"></Route>
                  <Route
                     component={() => {
                        return <Index toggleTheme={() => toggleTheme()}></Index>
                     }}
                  ></Route>
               </Switch>
            </ThemeProvider>
         </Router>
      </div>
   )
}
export default App
