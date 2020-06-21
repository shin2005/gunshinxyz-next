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
        <div>
          <img
            src="https://lh3.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y"
            style={{ width: '40rem' }}
          />
        </div>
        <a href="https://www.minecraft.net/" target="blank">
          Official Website
        </a>
      </div>
      <p style={{ color: '#fff', padding: '5rem' }}>
        {' '}
        Minecraft is a game that is based on blocks. A block world is generated
        in the game, and you can either build massive structures in creative
        mode or fight monsters, hunt, and survive in survival mode. {''}
      </p>
      <h4>Civilization VI</h4>
      <img
        src="https://images8.alphacoders.com/707/thumb-1920-707947.jpg"
        style={{ width: '50rem' }}
      />
      <div>
        <a href="https://civilization.com/ko-KR/" target="blank">
          Official Website
        </a>
      </div>
      <p style={{ color: '#fff', padding: '5rem' }}>
        Civilization VI is a game where you can build your own civilizations,
        and make your country into the greatest country on Earth.
      </p>
    </div>
  );
}
