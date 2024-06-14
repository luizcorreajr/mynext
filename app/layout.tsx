import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "My Next - Home",
  description: "Main page this store",
  keywords: "store, online, ecommerce",
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
})

const RootLayout = ({children}:any) => {
  return (
    <html>
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;