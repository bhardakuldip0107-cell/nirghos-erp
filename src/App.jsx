import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DemoProvider } from './context/DemoContext';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/common/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <DemoProvider>
          <AppRoutes />
        </DemoProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
