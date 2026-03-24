import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormProvider } from './context/FormContext'
import Layout from './components/Layout'
import Landingpage from './Landingpage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import PageLoader from './components/pageLoader'
import React, { useState, useEffect } from 'react'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <BrowserRouter basename="/react-crm-website">
      <FormProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landingpage />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:slug" element={<BlogPost />} />
          </Route>
        </Routes>
      </FormProvider>
    </BrowserRouter>
  )
}

export default App;