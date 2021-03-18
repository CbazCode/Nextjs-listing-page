import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Thanks Ninja | Home</title>
        <meta name="keywords" content="ninja"/>
      </Head>
      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className = {styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti non ratione, recusandae aspernatur nostrum esse fuga. Dolorem perspiciatis iste deleniti.</p>
        <p className = {styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti non ratione, recusandae aspernatur nostrum esse fuga. Dolorem perspiciatis iste deleniti.</p>
        <Link href="/people">
          <a className={styles.btn}>See people listing</a>
        </Link>
      </div>
    </>
  )
}
