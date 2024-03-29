import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import QuoteForm from '../components/quotes/QuoteForm';
import { useEffect } from 'react';

const NewQuote = () => {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addNewQuoteHandler = (data) => {
    sendRequest(data);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addNewQuoteHandler}></QuoteForm>;
};

export default NewQuote;
