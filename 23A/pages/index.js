import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: ' The First Meetup',
    image: 'https://www.ana.co.jp/www2/plan-book/where-we-travel/paris/paris-01.jpg',
    address: 'Some address 01, 12345 Paris',
    description: 'This is the first meetup',
  },
  {
    id: 'm2',
    title: ' The Second Meetup',
    image: 'https://www.ana.co.jp/www2/plan-book/where-we-travel/paris/paris-01.jpg',
    address: 'Some address 01, 12345 Paris',
    description: 'This is the second meetup',
  },
];

function Homepage(props) {
  // const [loadedMeetups, setLoadedMeetup] = useState([]);
  //useEffect is run after the Component has executed by nextJS, in the second render cycle, in the browser, therefor page content will empty and not suitable for SEO. We will getStaticProps instead to load server data in build time.
  // useEffect(() => {
  //   //Send http request and fetch data
  //   setLoadedMeetup(DUMMY_MEETUP);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
}

//Only can execute in the page component files
export async function getStaticProps() {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default Homepage;
