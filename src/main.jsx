import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Users from './components/Users/Users.jsx'
import Posts from './components/Posts/Posts.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import About from './components/About/About.jsx'
import Comments from './components/Comments/Comments.jsx'
import UserDetailsPage from './components/UserDetailsPage/UserDetailsPage.jsx'

const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: '/users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetailsPage
      },
      {
        path: '/comments',
        loader: async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/comments')
          return res.json()
        },
        Component: Comments
      },
      {
        path: '/posts',
        element: <Suspense fallback={
          <div className='absolute inset-0 flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        }>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>
      }
    ],
  },
  { path: '/about', Component: About },
  { path: '/blogs', Component: Blogs },
  { path: '/app', Component: App },
  { path: '*', element: <h1>Error 404 Found</h1> }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
