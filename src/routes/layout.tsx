import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});


export default component$(() => {
  useStyles$(styles);
  return (<>
    <Header />
    <main class="flex flex-col justify-center items-center gap-4 p-4">
      <Slot />
    </main>
    <Footer />
  </>)
});
