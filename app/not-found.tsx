import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Back to Home</Link>
    </section>
  )
}

export default NotFound;