export default function AboutUs() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto lg:px-6">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div>
              <span className="text-indigo-600 font-semibold uppercase tracking-wide">
                About Us
              </span>

              <h2 className="mt-4 mb-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Welcome To BookStore
              </h2>

              <p className="mb-6 text-gray-500 lg:text-lg dark:text-gray-400 leading-8">
                BookStore adalah platform online yang menyediakan berbagai
                koleksi buku dengan tampilan modern dan pengalaman belanja
                yang mudah digunakan.
              </p>

              <p className="mb-8 text-gray-500 lg:text-lg dark:text-gray-400 leading-8">
                Kami ingin membantu para pecinta buku menemukan bacaan
                favorit mereka dengan cepat, nyaman, dan menyenangkan.
              </p>

              {/* SIMPLE STATS */}
              <div className="grid grid-cols-2 gap-6">

                <div className="p-5 rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <h3 className="text-3xl font-bold text-indigo-600">
                    1000+
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Books
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <h3 className="text-3xl font-bold text-indigo-600">
                    500+
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Customers
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Books"
                className="rounded-3xl shadow-2xl object-cover w-full max-w-lg h-[500px]"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}