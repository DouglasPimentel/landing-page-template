import styles from "./styles.module.scss";

type HeadlineProps = {
  title: string;
  text: string;
};

export default function Headline({ title, text }: HeadlineProps) {
  return (
    <section className={styles.headline}>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
