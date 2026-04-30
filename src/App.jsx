import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import BookCreate from "./pages/admin/books/create";
import AdminBooks from "./pages/admin/books";
import CreateGenre from "./pages/admin/genres/create";
import AdminGenres from "./pages/admin/genres";
import CreateAuthor from "./pages/admin/authors/create";
import AdminAuthors from "./pages/admin/authors";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* public */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />

            {/* auth */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            {/* books(admin) */}
            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
            </Route>

            {/* genres */}
            <Route path="genres">
              <Route index element={<AdminGenres />} />
              <Route path="create" element={<CreateGenre />} />
            </Route>

            {/* authors */}
            <Route path="authors">
              <Route index element={<AdminAuthors />} />
              <Route path="create" element={<CreateAuthor />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
