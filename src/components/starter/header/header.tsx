import { component$ } from "@builder.io/qwik";

import styles from "./header.module.css";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={50} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.dev/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>

        </ul>
      </div>
    </header>
  );
});
