import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from "./routes/protected"
import HomePage from "./pages/home"
import ImageUpload from "./components/image-upload"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/image" element={
          <ProtectedRoute>
            <ImageUpload />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
