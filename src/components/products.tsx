export default async function Products() {
  await new Promise((resolve) => {
    setTimeout(resolve, 4000)
  })
  return (
    <div>Products</div>
  )
}