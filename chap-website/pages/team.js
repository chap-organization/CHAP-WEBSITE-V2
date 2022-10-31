import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Team.module.css'
import Team from "../component/Team/Team";

export default function Home() {
  return (
    <div>
        <Head>
        <title>Chap</title>
        <meta name="description" content="Chap" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <Team/>
        </main>
    </div>
  )
}
