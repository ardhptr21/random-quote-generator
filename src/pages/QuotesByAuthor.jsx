import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import QuoteContent from '../components/QuoteContent';
import Loader from '../components/Loader';

const QuotesByAuthor = ({ BASE_API_URL }) => {
  const params = useParams();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_API_URL}?author=${params.author_name}`);
      if (res.ok) {
        const json = await res.json();
        setQuotes(json.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Loader />;
  return (
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
  );
};

export default QuotesByAuthor;
