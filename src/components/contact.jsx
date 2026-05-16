import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "6285764457002";

    const text = `
      Halo Admin Bookstore 👋

      Nama: ${form.name}
      Email: ${form.email}
      Topik: ${form.topic}

      Pesan:
      ${form.message}
      `;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 border text-center border-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-1">Contact To Admin</h2>

          <p className="text-gray-400 text-sm mb-6">
            Kami akan membalas dalam 1×24 jam
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nama lengkap"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-700 border border-gray-600 p-3 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-700 border border-gray-600 p-3 text-white"
            />

            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-700 border border-gray-600 p-3 text-white"
            >
              <option value="">Pilih topik...</option>

              <option value="Order">Order</option>

              <option value="Payment">Payment</option>

              <option value="Complaint">Complaint</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Tulis pesan..."
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-gray-700 border border-gray-600 p-3 text-white"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700"
            >
              Kirim pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
