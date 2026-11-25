import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from './context/context';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/errorBoundary';
import Loader from './components/loader';
import Login from './pages/login';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Home = lazy(() => import('./pages/home'));
const Blogs = lazy(() => import('./pages/blogs'));
const About = lazy(() => import('./pages/about'));
const Detail = lazy(() => import('./pages/detail'));
const Contact = lazy(() => import('./pages/contact'));
const VerifyEmail = lazy(() => import('./pages/verifyEmail'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const TermsOfservice = lazy(() => import('./pages/termsOfservice'));
const NotFound = lazy(() => import('./pages/notFound'));


const App = () => {

  const { authState } = useContext(Context);
  const location = useLocation();

  if (authState === 'checking') {
    return <Loader />
  }

  if (authState === 'unauthenticated' && location.pathname !== '/login' && location.pathname !== '/forget-password' && location.pathname !== '/privacy-policy' && location.pathname !== '/terms-of-service') {
    return <Navigate to='/login' replace />;
  }

  return (
    <section aria-label='main-body' className='bg-gray-200'>
      <Navbar />
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={authState === 'unauthenticated' ? <Login /> : <Navigate to='/' replace />} />
            <Route path='/verify-email' element={<VerifyEmail />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-service' element={<TermsOfservice />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </section>
  )
}

export default App

