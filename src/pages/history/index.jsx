import { useEffect, useState } from "react";
import { getTransactionHistory } from "../../_service/transactions";

export default function HistoryPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await getTransactionHistory();

        setTransactions(result || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-[70vh] bg-[#0f172a] py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* TITLE */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Purchase History</h1>

          <p className="text-slate-400 mt-2">
            Lihat semua riwayat pembelian buku kamu di sini.
          </p>
        </div>

        {/* EMPTY */}
        {transactions.length === 0 ? (
          <div className="bg-[#1e293b] rounded-3xl p-12 text-center shadow-sm border border-slate-700">
            <p className="text-slate-400">Belum ada transaksi</p>
          </div>
        ) : (
          <div className="space-y-5">
            {transactions.map((item) => (
              <div
                key={item.id}
                className="bg-[#1e293b] border border-slate-700 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  {/* LEFT */}
                  <div className="flex items-center gap-5">
                    <div className="overflow-hidden rounded-2xl border border-slate-700">
                      <img
                        src={`http://127.0.0.1:8000/storage/books/${item.book.cover_photo}`}
                        alt={item.book.title}
                        className="w-20 h-28 object-cover hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">
                        {item.book.title}
                      </h2>

                      <div className="space-y-1">
                        <p className="text-sm text-slate-400">
                          Order :
                          <span className="ml-1 text-slate-200 font-medium">
                            {item.order_number}
                          </span>
                        </p>

                        <p className="text-sm text-slate-400">
                          Quantity :
                          <span className="ml-1 text-slate-200 font-medium">
                            {item.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <div className="bg-indigo-500/10 px-4 py-2 rounded-xl mb-3">
                      <p className="text-xl font-bold text-indigo-400">
                        Rp {item.total_amount}
                      </p>
                    </div>

                    <p className="text-sm text-slate-400">
                      {new Date(item.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>

                    <div className="mt-3">
                      <span className="bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/20">
                        Success
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
