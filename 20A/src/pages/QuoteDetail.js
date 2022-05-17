import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Max Heichling',
    text: 'Learning React is fun!',
  },
  {
    id: 'q2',
    author: 'Max',
    text: 'Learning React is great!',
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
