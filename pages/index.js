import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import About from '../components/About'
import Review from '../components/Review'
import Footer from '../components/Footer'


export default function Home(){
return (
<>
<Head>
<title>Norka's Kai — Lakefront Cafe, Queenstown</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content="Pet & boat friendly lakefront cafe in Queenstown — coffee, matcha, smoothies, bagels, vegan & gluten-free options." />
</Head>
<Header />
<main className="min-h-screen">
<Hero />
<Menu />
<About />
<Review />
</main>
<Footer />
<style jsx global>{`@import '../styles/global.css';`} </style>
</>
)
}
