import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Testing!!" />
        <p className="description">
           Run!
        </p>
      </main>

      <Footer />
    </div>
  )
}
