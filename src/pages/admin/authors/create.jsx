import { useState } from "react";
import { createAuthor } from "../../../_service/authors";
import { useNavigate } from "react-router-dom";

export default function CreateAuthor() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createAuthor(formData);
      navigate("/admin/authors");
    } catch (error) {
      console.log(error);
      alert("Error creating author");
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        
        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Create Author
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Add a new author to your collection
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Author Name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="author@email.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/authors")}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}