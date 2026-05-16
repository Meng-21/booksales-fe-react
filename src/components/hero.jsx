export default function Hero() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-indigo-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>

            <span className="text-sm font-medium">
              Discover best seller books and new arrivals
            </span>

            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Find Your Next Favorite Book Here
          </h1>

          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Temukan berbagai koleksi buku terbaik mulai dari novel, teknologi,
            bisnis, hingga pengembangan diri dengan pengalaman belanja yang
            mudah, cepat, dan nyaman.
          </p>

          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              POPULAR CATEGORIES
            </span>

            <div className="flex flex-wrap justify-center items-center mt-8 gap-4 text-gray-500">
              <div className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white">
                Novel
              </div>

              <div className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white">
                Technology
              </div>

              <div className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white">
                Business
              </div>

              <div className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white">
                Self Improvement
              </div>

              <div className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white">
                Education
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
