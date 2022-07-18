import React from "react";
import styles from "./styles.module.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  isMenu: boolean;
  isFooter: boolean;
};

export default function Layout({ children, isMenu, isFooter }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header isMenu={isMenu} />
      <main>{children}</main>
      {isFooter && <Footer />}
    </div>
  );
}
