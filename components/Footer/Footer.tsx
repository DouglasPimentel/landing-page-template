import Image from "next/image";

import Logo from "../Logo/Logo";

import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.content}>
        <div className={styles.aboutWrapper}>
          <Logo />
          <p className={styles.textAbout}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <nav className={styles.menuFooterWrapper}>
          <div>
            <h4>Products</h4>
            <ul>
              <li>Web Studio</li>
              <li>DynamicBox Flex</li>
              <li>Programming Forms</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Nostrud exercitation</li>
              <li>Visual mockups</li>
              <li>Nostrud exercitation</li>
              <li>Visual mockups</li>
              <li>Nostrud exercitation</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Consectetur adipiscing</li>
              <li>Labore et dolore</li>
              <li>Consectetur adipiscing</li>
              <li>Labore et dolore</li>
              <li>Consectetur adipiscing</li>
            </ul>
          </div>
        </nav>
      </section>
      <section className={styles.copyright}>
        <div className={styles.text}>
          <span>© 2022 Landing Template. All rights reserved.</span>
        </div>
        <div className={styles.social}>
          <ul>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li>
              <a href="https://www.github.com" target="_blank" rel="noreferrer">
                <Image src="/github.svg" alt="Github" width={32} height={32} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin"
                  width={32}
                  height={32}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
