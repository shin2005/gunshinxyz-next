import Link from "next/link";
import { css } from "emotion";

export default function App({ Component, pageProps }) {
  return (
    <div
      className={css`
        background-image: url("/cover3.jpg");
        background-size: cover;
        overflow: hidden;
        text-align: center;
        a {
          color: #fff;
        }
      `}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about-me">
        <a>About Me</a>
      </Link>
      <Link href="/my-work">
        <a>My Work</a>
      </Link>
      <Component {...pageProps} />
    </div>
  );
}