import { component$ } from "@builder.io/qwik";

import styles from "./header.module.css";
import { QwikLogo } from "../icons/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={96} width={96} />
          </a>
        </div>
        <ul>
          <li>
            <Link href="/pokemons/list-ssr">LIST-SSR</Link>
          </li>
          <li>
            <Link href="/pokemons/list-client">LIST-CLIENT</Link>
          </li>
          <li>

          </li>

        </ul>
      </div>
    </header>
  );
});
