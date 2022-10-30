import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CHAP from '../component/CHAP/CHAP_comp.js'
import About from '../component/About/About.js'
import HomeTeam from '../component/Home_Team/HomeTeam.js'
import MediaSection from '../component/Media/MediaSection'

export default function Home() {
  return (
    <div>
        <CHAP/>
        <About/>
        <HomeTeam/>
        <MediaSection />
    </div>
  )
}
