import './App.css'
import BookProfile from './components/BookProfile';
import Books from './components/Books'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/book/:id",
    element: <BookProfile />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
