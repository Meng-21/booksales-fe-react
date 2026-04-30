import { useEffect, useState } from "react";
import { getAuthors } from "../../../_service/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const data = await getAuthors();
      setAuthors(data);
    };

    fetchAuthors();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Authors
          </h2>
          <Link
            to={"/admin/authors/create"}
            className="flex items-center text-white bg-indigo-700 hover:bg-indigo-800 rounded-lg text-sm px-4 py-2"
          >
            + Add Author
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
              </tr>
            </thead>

            <tbody>
              {authors.length > 0 ? (
                authors.map((author) => (
                  <tr
                    key={author.id}
                    className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                      {author.name}
                    </td>

                    <td className="px-4 py-3">
                      {author.email}
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