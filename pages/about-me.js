import Head from 'next/head';

export default function AboutMe() {
  return (
    <div style={{ padding: '1rem', color: '#fff' }}>
      <div style={{ padding: '1rem', color: '#fff' }}>
        <Head>
          <title>Gun XYZ: Hobbies</title>
        </Head>
        <h1>Hobbies</h1>
        <h3>Games</h3>
        <h4>Minecraft</h4>
        <img src="https://lh3.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y" />
      </div>
      <p style={{ color: '#fff', padding: '3rem' }}>
        {' '}
        Minecraft is a game that is based on blocks. A block world is generated
        in the game, and you can either build massive structures in creative
        mode or fight monsters, hunt, and survive in survival mode. {''}
      </p>
      <h4>Civilization VI</h4>
    </div>
  );
}
