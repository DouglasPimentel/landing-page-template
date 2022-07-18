import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <div className={styles.brand}>
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
        </a>
      </Link>
    </div>
  );
}
