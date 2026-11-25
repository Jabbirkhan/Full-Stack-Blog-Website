import React, { lazy, Suspense, useContext } from 'react'
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Context } from './context/context';
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/errorBoundary';
import Loader from './components/loader';
import Login from './pages/login';

const Home = lazy(() => import('./pages/home'));
const AddBlog = lazy(() => import('./pages/addBlog'));
const BlogList = lazy(() => import('./pages/blogList'));
const UpdateBlog = lazy(() => import('./pages/updateBlog'));
const NotFound = lazy(() => import('./pages/notFound'));
const AddLinks = lazy(() => import('./pages/addLinks'));
const LinksList = lazy(() => import('./pages/linksList'));
const UpdateLinks = lazy(() => import('./pages/updateLinks'));
const AddPolicy = lazy(() => import('./pages/addPolicy'));
const PolicyList = lazy(() => import('./pages/policyList'));
const UpdatePolicy = lazy(() => import('./pages/updatePolicies'));
const AddPrinciple = lazy(() => import('./pages/addPrinciple'));
const PrincipleList = lazy(() => import('./pages/principleList'));
const UpdatePrinciple = lazy(() => import('./pages/updatePrinciple'));
const AddInfo = lazy(() => import('./pages/addInfo'));
const InfoList = lazy(() => import('./pages/infoList'));
const UpdateInfo = lazy(() => import('./pages/updateInfo'));
const ForgetPassword = lazy(() => import('./pages/forgetPassword'));

const App = () => {

  const { authState } = useContext(Context);
  const location = useLocation();

  if (authState === 'checking') {
    return <Loader />
  }

  if (authState === 'unauthenticated' && location.pathname !== '/login' && location.pathname !== '/forget-password') {
    return <Navigate to='/login' replace />;
  }

  return (
    <section>
      <ToastContainer />
      <ErrorBoundary FallbackComponent={ErrorFallBack} onReset={() => window.location.reload()}>
        <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />} >
                <Route index element={<AddBlog />} />
                <Route path='blogs' element={<BlogList />} />
                <Route path='updateBlog/:id' element={<UpdateBlog />} />
                <Route path='addlinks' element={<AddLinks />} />
                <Route path='links' element={<LinksList />} />
                <Route path='updatelinks/:id' element={<UpdateLinks />} />
                <Route path='addpolicies' element={<AddPolicy />} />
                <Route path='policies' element={<PolicyList />} />
                <Route path='updatepolicy/:id' element={<UpdatePolicy />} />
                <Route path='addprinciple' element={<AddPrinciple />} />
                <Route path='principles' element={<PrincipleList />} />
                <Route path='updateprinciple/:id' element={<UpdatePrinciple />} />
                <Route path='addinformation' element={<AddInfo />} />
                <Route path='information' element={<InfoList />} />
                <Route path='updateinformation/:id' element={<UpdateInfo />} />
                <Route path='login' element={authState === 'unauthenticated' ? <Login /> : <Navigate to='/' replace />} />
                <Route path='forget-password' element={<ForgetPassword />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
        </Suspense>
      </ErrorBoundary>
    </section>
  )
}

export default App
