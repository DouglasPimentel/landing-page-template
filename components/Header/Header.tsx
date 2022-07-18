import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

import Logo from "../Logo/Logo";

type HeaderProps = {
  isMenu: boolean;
};

export default function Header({ isMenu }: HeaderProps) {
  return (
    <header className={styles.container}>
      <Logo />
      {isMenu && (
        <nav className={styles.menuWrapper}>
          <ul className={styles.menuMain}>
            <li>
              <Link href="/">
                <a>Documentation</a>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <a className={styles.signup}>Sign up</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
