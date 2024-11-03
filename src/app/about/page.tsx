import { cookies } from "next/headers"

export default async function AboutPage() {
  const cookieStore = cookies()
  const theme = (await cookieStore).get("resultsPerPage")
  console.log(theme)
  return (
    <h1>About Page {new Date().toLocaleTimeString()}</h1>
  )
}