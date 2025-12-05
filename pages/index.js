import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Norka's Kai Cafe - Te Anau, New Zealand</title>
        <meta name="description" content="Discover Norka's Kai Cafe: Fresh Kiwi cuisine, stunning lake views, and cozy vibes in Te Anau." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Footer />
    </div>
  );
}
