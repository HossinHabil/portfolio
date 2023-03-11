import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar"
import Header from "@/components/Header/Header"
import About from "@/components/About/About"
import Projects from "@/components/Projects/Projects"
import Contact from '@/components/Contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hossin Habil</title>
        <meta name="description" content="Hossin Habil's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
