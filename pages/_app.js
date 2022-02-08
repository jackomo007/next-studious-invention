import Head from "next/head";

import Layout from "../components/layout/layout";
import Notification from "../components/ui/notification/notification";
import { NotificationContextProvider } from "../store/notification-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Awesome NextJs Events</title>
          <meta name="description" content="Awesome Nextjs Events" />
          <meta
            name="viewport"
            content="initial-scale-1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <Notification title="Test" message="This is a test." status="pending" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
