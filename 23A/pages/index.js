import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function Homepage(props) {
  // const [loadedMeetups, setLoadedMeetup] = useState([]);
  //useEffect is run after the Component has executed by nextJS, in the second render cycle, in the browser, therefor page content will empty and not suitable for SEO. We will getStaticProps instead to load server data in build time.
  // useEffect(() => {
  //   //Send http request and fetch data
  //   setLoadedMeetup(DUMMY_MEETUP);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fet data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

//Only can execute in the page component files
export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect('mongodb+srv://Vy:IamVy0511@cluster0.ekd6h.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600, //re-generated every hour
  };
}

export default Homepage;
