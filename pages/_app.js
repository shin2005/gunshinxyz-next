import Link from 'next/link';
import { css } from 'emotion';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div
        className={css`
          background-image: url('/cover.jpg');
          background-size: cover;
          overflow: hidden;
          text-align: center;
          img-height: '100vh';
          a {
            color: #fff;
            margin-right: 2rem;
          }
        `}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about-me">
          <a>About Myself</a>
        </Link>
        <Link href="/my-work">
          <a>My Work</a>
        </Link>
        <Component {...pageProps} />
      </div>
    </>
  );
}
