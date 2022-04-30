import { useState } from "react";
import { Provider } from "react-redux";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <Provider>
      <h1>counter save</h1>
      <h2>count: {count}</h2>

      <button onClick={() => setCount(count + 1)} className={styles.borderBtn}>
        +
      </button>
      <button onClick={() => setCount(count - 1)} className={styles.borderBtn}>
        -
      </button>
    </Provider>
  );
}
