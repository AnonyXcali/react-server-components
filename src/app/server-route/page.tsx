import { serverSideFunction } from "@/utils/server-utils"
import ImageSlider from "@/components/imageSlider"

export default function ServerRoutePage() {
  const result = serverSideFunction()
  return (
    <>
      <h1>Server Route Page</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
    
  )
}