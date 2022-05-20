import { getAllQuotes } from '../lib/api';
import useHttp from '../hooks/use-http';

import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import QuoteList from '../components/quotes/QuoteList';
import { useEffect } from 'react';

const AllQuotes = () => {
  const { sendRequest, data: loadedData, error, status } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="centered focused">
        <p>{error}</p>
      </div>
    );
  }

  if (status === 'completed' && (!loadedData || loadedData.length === 0)) {
    return (
      <div>
        <NoQuotesFound />
      </div>
    );
  }

  return <QuoteList quotes={loadedData} />;
};

export default AllQuotes;
