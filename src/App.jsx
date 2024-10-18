import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Search from './components/Search';
import Definitions from './components/Definitions';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Dictionary App</h1>
        <Search />
        <Definitions />
      </div>
    </QueryClientProvider>
  );
}

export default App;
