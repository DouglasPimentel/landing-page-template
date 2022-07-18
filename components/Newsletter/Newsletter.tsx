import React from "react";
import styles from "./styles.module.scss";

export default function Newsletter() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <section className={styles.newsletter}>
      <div className={styles.headline}>
        <h2>Stay in the loop</h2>
        <p>Join our newsletter to get top news before anyone else.</p>
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your best email…"
            autoComplete="off"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
