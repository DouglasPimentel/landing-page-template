import Link from "next/link";

import styles from "./styles.module.scss";

type ButtonPrimaryTypes = {
  href: string;
  text: string;
};

export default function ButtonPrimary({ href, text }: ButtonPrimaryTypes) {
  return (
    <Link href={href}>
      <a className={styles.primary}>{text}</a>
    </Link>
  );
}
