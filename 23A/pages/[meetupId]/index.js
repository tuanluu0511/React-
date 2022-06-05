import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return <MeetupDetail image="https://www.ana.co.jp/www2/plan-book/where-we-travel/paris/paris-01.jpg" title="The First Meetup" address="Some street 05, Paris" description="Some descriptions" />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  //print in console

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: 'https://www.ana.co.jp/www2/plan-book/where-we-travel/paris/paris-01.jpg',
        title: 'The First Meetup',
        address: 'Some street 05, Paris',
        description: 'Some description',
      },
    },
  };
}

export default MeetupDetails;
