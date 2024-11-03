export default async function Reviews() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return (
    <div>Reviews</div>
  )
}