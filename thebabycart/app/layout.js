import { Inter } from "next/font/google";
import "./globals.css";
import "./css/responsive.lg.css";
import "./css/responsive.md.css";
import "./css/responsive.sm.css";
import "./css/responsive.xl.css";
import "./css/responsive.xs.css";
import "./css/utilities.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ItemsProvider } from "./store/Items-store";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Baby Cart",
  description: "Developed by Ayush Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <ItemsProvider>{children}</ItemsProvider>
        <Footer></Footer>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
