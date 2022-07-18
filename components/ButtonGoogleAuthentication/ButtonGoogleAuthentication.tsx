import styles from "./styles.module.scss";

export default function ButtonGoogleAuthentication() {
  return (
    <>
      <a className={styles.google} href="">
        <svg
          width="31"
          height="25"
          viewBox="0 0 31 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" width="1" height="25" fill="#F56565" />
          <path
            d="M6.9 11V13.4H11C10.8 14.4 9.8 16.4 7 16.4C4.6 16.4 2.7 14.4 2.7 12C2.7 9.6 4.7 7.6 7 7.6C8.4 7.6 9.3 8.2 9.8 8.7L11.7 6.9C10.5 5.7 8.9 5 7 5C3.1 5 0 8.1 0 12C0 15.9 3.1 19 7 19C11 19 13.7 16.2 13.7 12.2C13.7 11.7 13.7 11.4 13.6 11H6.9Z"
            fill="#FED7D7"
          />
        </svg>

        <span>Sign up with Google</span>
      </a>
      <p className={styles.registerEmail}>Or, register with your email</p>
    </>
  );
}
