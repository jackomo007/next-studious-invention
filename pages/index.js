import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
  return (
    <>
      <h1 className="center">Home Page</h1>
      <EventList items={props.events} />
    </>
  );
};

export function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  const  secondsToRefresh = 1800
  
  return {
    props: {
      events: featuredEvents
    },
    revalidate: secondsToRefresh
  }
}


export default HomePage;
