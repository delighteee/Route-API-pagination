import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';



let About = lazy(() => import('../pages/About'));
let Users = lazy(() => import('../pages/Users'));
let Breakfast = lazy(() => import('../pages/Breakfast'));
let ErrorPage = lazy(() => import('../pages/ErrorPage'));
let Home = lazy(() => import('../pages/Home'));


const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div className="loading">Loading</div>}><Home /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={<div className="loading">Loading</div>}><About /></Suspense>}>
        <Route path=":breakfastId" element={<Breakfast />} />
      </Route>
      <Route path="/users" element={<Suspense fallback={<div className="loading">Loading</div>}><Users /></Suspense>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );

  export default AppRouter;