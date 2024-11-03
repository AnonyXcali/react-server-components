"use client"
import { useState } from "react"

export default function DashboardPage() {
  const [name, setName] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void  => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        name="name"
        value={name}
        placeholder="Write name?"
        onChange={handleChange}
      />
      <p>Hello, {name}!</p>
    </div>
  )
}