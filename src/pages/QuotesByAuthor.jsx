import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import QuoteContent from '../components/QuoteContent';
import Loader from '../components/Loader';

const QuotesByAuthor = ({ BASE_API_URL }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, [params.author_name]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_API_URL}/quotes?author=${params.author_name}`);
      if (res.ok) {
        const json = await res.json();
        setQuotes(json.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAuthors = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_API_URL}/authors`);
      if (res.ok) {
        const json = await res.json();
        setAuthors(json.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRedirectAuthor = () => {
    const rand = ~~(Math.random() * authors.length);
    navigate(`/${authors[rand]}`, { replace: true });
  };

  return (
    <>
      <button
        className="absolute right-32 top-8 gap-2 flex justify-center items-center text-lg"
        onClick={handleRedirectAuthor}
      >
        <span>random</span>
        <span className={loading ? 'animate-spin' : ''}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-2xl">
          <div className="pl-20 mt-[109px]">
            <h1 className="text-4xl font-bold">{params.author_name}</h1>
          </div>
          <div className="mt-36 space-y-36">
            {quotes.map((quote) => (
              <QuoteContent quote={quote.quoteText} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default QuotesByAuthor;
