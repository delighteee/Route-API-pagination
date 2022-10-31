import "./App.css";
import React, {useState} from 'react';
import Nav from './pages/components/Layout';
import AppRouter from './route/AppRouter';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';



function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}


function App() {
    
    return (
      <div className="App">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Nav/>
        <AppRouter />
        </ErrorBoundary>
      </div>
    );
  }
  
  export default App;