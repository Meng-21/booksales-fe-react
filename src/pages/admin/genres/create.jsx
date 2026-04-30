import { useState } from "react";
import { createGenre } from "../../../_service/genres";
import { useNavigate } from "react-router-dom";

export default function CreateGenre() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createGenre(formData);
      navigate("/admin/genres");
    } catch (error) {
      console.log(error);
      alert("Error creating genre");
    }
  };

  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-1">
          Create Genre
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Add a new genre to web
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Genre Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Genre description..."
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 pt-4">
            
            <button
              type="button"
              onClick={() => navigate("/admin/genres")}
              className="px-5 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Create
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}