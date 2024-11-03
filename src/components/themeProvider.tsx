"use client"
import { PropsWithChildren, useContext } from "react"
import { createContext } from "react"

type Theme = {
  colors: {
    primary: string
    secondary: string
  }
}


const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  }
}

const ThemeContext = createContext<Theme>(defaultTheme)

export const ThemeProvider = ({
  children
}: PropsWithChildren) => {

  return (
    <ThemeContext.Provider
      value={defaultTheme}
    >
      {children}
    </ThemeContext.Provider>
  )
}



export const useTheme = () => {
  const context = useContext(ThemeContext)

  if(!context) {
    throw new Error("Use useTheme with a component wrapped with Theme Context")
  }

  return context
}
