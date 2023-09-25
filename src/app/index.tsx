import { memo } from "react";

import P5Renderer from "@components/p5";
import { helloWorld } from "@p5/sketches";
import { ThemeProvider } from "@theme/provider";

import * as styles from "./styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.root}>
        <header className={styles.header}>header</header>
        <main className={styles.main}>
          <section className={styles.section}>
            <h1>p5 sandbox</h1>
            <P5Renderer sketch={helloWorld} className={styles.canvas} />
          </section>
        </main>
        <footer className={styles.footer}>footer</footer>
      </div>
    </ThemeProvider>
  );
};

export default memo(App);
