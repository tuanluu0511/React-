import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addNewQuoteHandler = (data) => {
    console.log(data);
  };

  return <QuoteForm onAddQuote={addNewQuoteHandler}></QuoteForm>;
};

export default NewQuote;
