import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>;
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">NextJS is a great framework</Link>
        </li>
        <li>NextJS is good for SEO</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
