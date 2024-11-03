export default async function Reviews() {
  await new Promise((resolve, _reject) => {
    setTimeout(resolve, 3000)
  })
  return (
    <div>Reviews</div>
  )
}