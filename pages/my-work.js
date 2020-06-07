import Head from 'next/head';
import css from 'styles/my-work.css';

export default function MyWork() {
  return (
    <div style={{ padding: '1rem', color: '#fff' }}>
      <Head>
        <title>Gun XYZ: My Work</title>
      </Head>
      <h1>My Work</h1>
      <h2>SNS</h2>
      <h3>Twitter</h3>
      <h4>
        My Twitter account:{' '}
        <a href="https://twitter.com/cieloeste0303" target="blank">
          @cieloeste0303
        </a>
      </h4>
      <h3>Youtube</h3>
      <h4>
        My Youtube page:{' '}
        <a
          href="https://www.youtube.com/channel/UCEaSW6TjclcuZzx7c1XUlvg?view_as=subscriber"
          target="blank"
        >
          Youtube
        </a>
      </h4>
      <h3>Github</h3>
      <h4>
        My Github page:{' '}
        <a href="https://github.com/shin2005" target="blank">
          shin2005
        </a>
      </h4>
    </div>
  );
}
