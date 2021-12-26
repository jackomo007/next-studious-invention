import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <h1 className="center">Home Page</h1>
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
