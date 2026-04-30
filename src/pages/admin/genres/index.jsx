import { useEffect, useState } from "react";
import { getGenres } from "../../../_service/genres";
import { Link } from "react-router-dom";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };

    fetchGenres();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Genres
          </h2>

          <Link
            to={"/admin/genres/create"}
            className="flex items-center text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg text-sm px-4 py-2"
          >
            + Add Genre
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>

            <tbody>
              {genres.length > 0 ? (
                genres.map((genre) => (
                  <tr
                    key={genre.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {genre.name}
                    </td>

                    <td className="px-4 py-3">
                      {genre.description}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center py-4">
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
}