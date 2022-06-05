import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
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

function Homepage() {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}

export default Homepage;
