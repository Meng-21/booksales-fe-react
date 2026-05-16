import { useEffect, useState } from "react";
import { getBestSeller } from "../../_service/books";

export default function AdminDashboard() {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const fetchBestSeller = async () => {
      try {
        const result = await getBestSeller();
        setBestSeller(result || []);
      } catch (error) {
        console.log(error);
        setBestSeller([]);
      }
    };

    fetchBestSeller();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] p-6">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="text-slate-400 mt-1">
          Overview best selling books
        </p>
      </div>

      {/* CARD CONTAINER */}
      <div className="bg-[#1e293b] rounded-2xl shadow-xl border border-slate-700 p-6">
        
        <h2 className="text-xl font-semibold mb-6 border-b border-slate-700 pb-3 text-white">
          🔥 Best Seller Books
        </h2>

        {bestSeller.length === 0 ? (
          <div className="text-center text-slate-400 py-10">
            No Data Available
          </div>
        ) : (
          <div className="space-y-4">
            {bestSeller.map((book, index) => (
              <div
                key={book.id}
                className="flex items-center justify-between p-4 rounded-xl bg-[#0f172a] hover:bg-[#172033] transition duration-300 border border-slate-700"
              >
                
                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                  
                  {/* RANK */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold">
                    {index + 1}
                  </div>

                  {/* IMAGE */}
                  <img
                    src={`http://127.0.0.1:8000/storage/books/${book.cover_photo}`}
                    alt={book.title}
                    className="w-14 h-14 rounded-lg object-cover shadow-lg"
                  />

                  {/* INFO */}
                  <div>
                    <p className="font-semibold text-white">
                      {book.title}
                    </p>

                    <p className="text-sm text-slate-400">
                      Stock: {book.stock}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">
                  <p className="text-blue-400 font-bold text-lg">
                    {book.transactions_count} sold
                  </p>

                  <p className="text-xs text-slate-500">
                    ID: {book.id}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}