// pages/index.js
import Head from 'next/head'

import Header from '../components/header'
import Hero from '../components/hero'
import Menu from '../components/menu'
import About from '../components/about'
import Review from '../components/review' // singular 'review.js' per your file tree
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Norka's Kai — Lakefront Cafe, Queenstown</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Pet & boat friendly lakefront cafe in Queenstown — coffee, matcha, smoothies, bagels, vegan & gluten-free options."
        />
      </Head>

      <Header />

      <main className="min-h-screen">
        <Hero />
        <Menu />
        <About />
        <Review />
      </main>

      <Footer />

      {/* import global css (Next automatically handles it if present in styles/global.css) */}
      <style jsx global>{`@import '../styles/global.css';`}</style>
    </>
  )
}
