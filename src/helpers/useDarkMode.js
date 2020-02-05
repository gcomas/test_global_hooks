import { useState, useEffect } from "react"

const UseDarkMode = () => {
   const [theme, setTheme] = useState("light")

   const toggleTheme = () => {
      if (theme === "light") {
         localStorage.setItem("theme", "dark")
         setTheme("dark")
      } else {
         localStorage.setItem("theme", "light")
         setTheme("light")
      }
   }

   useEffect(() => {
      const localTheme = localStorage.getItem("theme")
      setTheme(localTheme)
   }, [])

   return [theme, toggleTheme]
}

export default UseDarkMode
