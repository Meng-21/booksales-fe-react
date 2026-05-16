import { useEffect, useState } from "react";
import { getUsers } from "../../../_service/users";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH USERS
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();

        console.log(response);

        // karena service biasanya sudah return data langsung
        setUsers(response.data || []);
      } catch (error) {
        console.error("Error fetch users:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  // SEARCH
  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase()),
  );


  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 min-h-screen">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-visible">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          {/* SEARCH */}
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>

              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="simple-search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Search user"
                />
              </div>
            </form>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-300">
            <thead className="bg-[#334155] text-gray-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Role</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-700 hover:bg-[#334155] transition"
                  >
                    {/* NAME */}
                    <td className="px-6 py-4 font-semibold text-white">
                      {user.name}
                    </td>

                    {/* EMAIL */}
                    <td className="px-6 py-4 text-gray-300">{user.email}</td>

                    {/* ROLE */}
                    <td className="px-6 py-4 text-gray-300">
                      {user.role || "customer"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center p-4 text-gray-400 text-sm">
          <span>Showing {filteredUsers.length} data</span>

          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-600 rounded hover:bg-[#334155]">
              1
            </button>

            <button className="px-3 py-1 border border-gray-600 rounded hover:bg-[#334155]">
              2
            </button>

            <button className="px-3 py-1 border border-gray-600 rounded hover:bg-[#334155]">
              3
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
