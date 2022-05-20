import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import Comments from '../components/comments/Comments';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;
  const { sendRequest, data: loadedQuote, status, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`${match.path}/`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
