import { useEffect, useState } from "react";
import {
  getTransactions,
} from "../../../_service/transactions";

export default function AdminTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        console.log(data);
        setTransactions(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactions();
  }, []);


  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      transaction.book?.title?.toLowerCase().includes(search.toLowerCase()) ||
      transaction.order_number?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
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
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                    placeholder="Search transaction..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    No
                  </th>

                  <th scope="col" className="px-4 py-3">
                    User
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Book
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Quantity
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Total Price
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b dark:border-gray-700"
                  >
                    <td className="px-4 py-3">{transaction.order_number}</td>

                    <td className="px-4 py-3">{transaction.user?.name}</td>

                    <td className="px-4 py-3">{transaction.book?.title}</td>

                    <td className="px-4 py-3">{transaction.quantity}</td>

                    <td className="px-4 py-3">Rp {transaction.total_amount}</td>

                    <td className="px-4 py-3">
                      <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded">
                        Success
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Total
              <span className="font-semibold text-gray-900 dark:text-white ml-1">
                {transactions.length}
              </span>
              Transactions
            </span>
          </nav>
        </div>
      </section>
    </>
  );
}
