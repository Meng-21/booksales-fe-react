import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="border-t-2 border-gray-700 p-6 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">

          <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                BookStore
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
                Temukan berbagai koleksi buku terbaik mulai dari novel,
                teknologi, bisnis, hingga pengembangan diri dengan pengalaman
                belanja yang nyaman dan modern.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                <li>
                  <Link to={"#"} className="hover:underline">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to={"#"} className="hover:underline">
                    Books
                  </Link>
                </li>

                <li>
                  <Link to={"#"} className="hover:underline">
                    Best Seller
                  </Link>
                </li>

                <li>
                  <Link to={"#"} className="hover:underline">
                    Categories
                  </Link>
                </li>

                <li>
                  <Link to={"#"} className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Contact
              </h3>

              <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                <li>Email: booksales@gmail.com</li>
                <li>Phone: +62 857 6445 7002</li>
                <li>Location: Medan, Indonesia</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2026 Nurmayanti. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}