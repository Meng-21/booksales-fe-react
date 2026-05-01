import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_service/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    _method: "PUT",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showAuthor(id);

        setFormData({
          name: data.name ?? "",
          email: data.email ?? "",
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
      payload.append("email", formData.email);
      payload.append("_method", "PUT");

      await updateAuthor(id, payload);

      navigate("/admin/authors");
    } catch (error) {
      console.log(error);
      alert("Error update author");
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Edit Author
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update author information
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
              placeholder="Author name"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="author@email.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
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