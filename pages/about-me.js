import Head from 'next/head';

export default function AboutMe() {
  return (
    <div style={{ padding: '1rem', color: '#fff' }}>
      <Head>
        <title>Gun XYZ: Hobbies</title>
      </Head>
      <h1>Hobbies</h1>
      <h3>Games</h3>
      <h4>Minecraft</h4>
      <img src="https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=en" />
    </div>
  );
}
