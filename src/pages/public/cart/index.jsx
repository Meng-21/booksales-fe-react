import {  useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState (() => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
});

  const removeCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  //untuk sistem checkout

  const handleCheckout = () => {
    const phone = "6285764457002"; // ganti nomor admin kamu

    if (cart.length === 0) {
      alert("Cart kosong!");
      return;
    }

    const orderId = "ORD-" + Date.now();
    const itemsText = cart
        .map((item, index) => {
          return `${index + 1}. ${item.title}
            Qty: ${item.quantity}
            Harga: Rp${item.price * item.quantity}`;
            })
        .join("\n\n");

    const message = `
    *BOOK ORDER CONFIRMATION*

    ━━━━━━━━━━━━━━━━━━
    *Order ID:* ${orderId}
    *Tanggal:* ${new Date().toLocaleString()}
    ━━━━━━━━━━━━━━━━━━

    *Detail Pesanan:*

    ${itemsText}

    ━━━━━━━━━━━━━━━━━━
    *TOTAL PEMBAYARAN: Rp${totalPrice}*

    *Catatan:*
    - Mohon cek kembali pesanan Anda
    - Pembayaran akan dikonfirmasi oleh admin

    ━━━━━━━━━━━━━━━━━━
    Terima kasih telah berbelanja di *Bookstore Kami*
    Kami akan segera memproses pesanan Anda!
    `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    };

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-5xl px-4 2xl:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Review your selected books before checkout.
          </p>
        </div>

        {cart.length > 0 ? (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Quantity:{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                      </p>

                      <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                        Rp{item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeCart(item.id)}
                    className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Total
                </h2>

                <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  Rp{totalPrice}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Checkout Via WhatsApp
              </button>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Looks like you haven't added any books yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
