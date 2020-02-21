import React, { useState, useMemo } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/header"
import Index from "./sites/index"
import Login from "./sites/login"
import UseDarkMode from "./helpers/useDarkMode"
import { lightTheme, darkTheme } from "./helpers/myTheme"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./helpers/global"
import UserLogged from "./helpers/userLogged"

function App() {
   const [theme, toggleTheme] = UseDarkMode()
   const [logged, setLogged] = useState(false)
   const loggedProvider = useMemo(
      () => ({
         logged,
         setLogged
      }),
      [logged, setLogged]
   )

   return (
      <div className="App">
         <Router>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
               <GlobalStyles />
               <Header toggleTheme={() => toggleTheme()}></Header>
               <Switch>
                  <UserLogged.Provider value={loggedProvider}>
                     <Route component={Login} exact path="/"></Route>
                     <Route
                        path="/index"
                        component={() => {
                           return (
                              <Index toggleTheme={() => toggleTheme()}></Index>
                           )
                        }}
                     ></Route>
                  </UserLogged.Provider>
               </Switch>
            </ThemeProvider>
         </Router>
      </div>
   )
}
export default App
