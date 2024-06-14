import Link from 'next/link';

export const metadata = {
  title: "My Next - Store"
}

const TiendaLayout = ({children}:any) => {
  return (
    <>
      <h2>Categories</h2>
      <nav>
        <ul>
          <li><Link href="/store/categories/smartphone">Smartphones</Link></li>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default TiendaLayout;