import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();
  const addNewQuoteHandler = (data) => {
    console.log(data);

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addNewQuoteHandler}></QuoteForm>;
};

export default NewQuote;
