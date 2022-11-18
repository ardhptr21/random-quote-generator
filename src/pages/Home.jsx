import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import QuoteContent from '../components/QuoteContent';

const Home = ({ BASE_API_URL }) => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_API_URL}/quotes/random`);
      if (res.ok) {
        const json = await res.json();
        setQuote(json.data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="absolute right-32 top-8 gap-2 flex justify-center items-center text-lg" onClick={fetchQuote}>
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

      <div className="max-w-2xl">
        {loading ? (
          <Loader />
        ) : (
          <>
            <QuoteContent quote={quote.quoteText} />
            <div className="pl-20 mt-[109px]">
              <Link
                to={quote.quoteAuthor}
                className="flex justify-between items-center group hover:bg-[#333333] space-y-[8px] p-7 hover:text-white transition duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold">{quote.quoteAuthor}</h3>
                  <h5 className="text-sm text-[#828282]">{quote.quoteGenre}</h5>
                </div>
                <div className="opacity-0 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
