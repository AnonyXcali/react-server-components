import NavLinks from "./nav-links"
import NavbarSearch from "./nav-search"
// import { useState } from "react"

export default function Navbar() {
  // const [text, setText] = useState<string>("")
  console.log("Navbar Rendered")

  return (
    <div>
      <NavLinks />
      <NavbarSearch />
    </div>
  )
}