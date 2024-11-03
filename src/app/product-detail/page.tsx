import Products from "@/components/products"
import Reviews from "@/components/reviews"
import { Suspense } from "react"

export default function ProductPage(): React.ReactNode {
  return (
    <div>
      <h1>ProductPage</h1>
      <Suspense
        fallback={<p>Loading product details...</p>}
      >
        <Products />
      </Suspense>
      <Suspense
        fallback={<p>Loading reviews...</p>}
      >
        <Reviews />
      </Suspense>
    </div>
  )
}