import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showGenre, updateGenre } from "../../../_service/genres";

export default function GenreEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    _method: "PUT",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showGenre(id);
        setFormData({
          name: data.name ?? "",
          description: data.description ?? "",
          _method: "PUT",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("description", formData.description);
      payload.append("_method", "PUT");

      await updateGenre(id, payload);

      navigate("/admin/genres");
    } catch (error) {
      console.log(error);
      alert("Error update genre");
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Edit Genre
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update genre information
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
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Genre name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              rows="5"
              placeholder="Genre description..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}