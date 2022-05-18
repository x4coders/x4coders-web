import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>x4coders</title>
        <meta name="description" content="Build. Share. Connect." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="md:w-1/2">
          <h2 className="w-full text-left text-lg mb-4">
            HACKATHONS
          </h2>
          <div className="w-full border rounded-lg flex flex-col">
            <img className="border-b rounded-t-lg w-full mb-5" alt="Preview of Little One's Bookhub hackathon" src="preview.jpg"></img>
            <div className="ml-4 pb-4">
              <p className="text-base mb-2"><b>Little One&apos;s Bookhub</b></p>
              <p className="text-base mb-2">by Little One&apos;s Bookhub</p>
              <p className="text-base mb-2">Status: <b>Active</b></p>
              <p className="text-base mb-2">Tech stack: <b>HTML</b> | <b>CSS</b> | <b>JS</b> | <b>Sheets API</b></p>
              <p className="text-base mb-2">Top contributors: <b>Priya</b> | <b>Olan</b> | <b>Amos</b> | <b>Al-Ameen</b></p>
              <p className="text-base mb-2">Mentor: <b>Renzil</b></p>
              <a className="text-base mb-2 underline" href="https://littleonesbookhub.netlify.app">Website</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
