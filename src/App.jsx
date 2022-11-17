import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuotesByAuthor from './pages/QuotesByAuthor';

const BASE_API_URL = 'https://quote-garden.herokuapp.com/api/v3/quotes';

const App = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center p-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home BASE_API_URL={BASE_API_URL} />} />
            <Route path="/:author_name" element={<QuotesByAuthor BASE_API_URL={BASE_API_URL} />} />
          </Routes>
        </BrowserRouter>
        <footer className="mt-16">
          <p className="font-medium text-gray-500">
            created by{' '}
            <a className="underline text-gray-700" href="https://instagram.com/ardhptr21">
              ardhptr21
            </a>
            - devchallenges.io
          </p>
        </footer>
      </main>
    </>
  );
};

export default App;
