import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CHAP from './CHAP.js'
import About from './About.js'

export default function Home() {
  return (
    <div>
        <CHAP/>
        <About/>
    </div>
  )
}
