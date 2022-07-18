import Link from "next/link";

import styles from "./styles.module.scss";

type ButtonSecondaryTypes = {
  href: string;
  text: string;
};

export default function ButtonSecondary({ href, text }: ButtonSecondaryTypes) {
  return (
    <Link href={href}>
      <a className={styles.secondary}>{text}</a>
    </Link>
  );
}
