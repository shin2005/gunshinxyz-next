//import ReactPlayer from 'react-player';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '1rem', color: '#fff' }}>
      <Head>
        <title>Gun XYZ: Essays</title>
      </Head>
      <h1>Essays</h1>
      <h2>Writings By Me</h2>
      <h4>Several Essays I Wrote On Some Questions</h4>
      <div>
        <h5>Q. What Do You Think about Political Correctness?</h5>
      </div>

      <div>
        <p style={{ margin: '4rem' }}>
          Political correctness is changing the vocabulary we use against
          minority peoples such as LGBT or other races. Changing the words we
          call them is a positive thing because we can protect the minorities.
          Minority people have a hard time because the core society that they
          are in is much smaller than the mainstream, and in some cases, they
          lack support from people who understand them. Exposure to invasive
          words may cause them to become outcasts in society, and in a
          democratic society, that is exactly what should be avoided. To avoid
          this, society should let them be at ease, at the minimum by changing
          the way they are called, which defines their identity. A name is the
          identity something or someone has in the world, which has an integral
          influence on how others see them and relate to them. We shouldn't make
          offensive names for them, for it might knock them away from us.
        </p>
      </div>
    </div>
  );
}
