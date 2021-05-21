import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function error404() {
    return <>
    <Head>
        <title>404 | Not Found</title>
    </Head>
    <div className={styles.error404}>
    <h1>404 - Successfully Transcended Reality</h1>
    <p>Mere Mortal brains cannot comprehend our goals.</p>
    <p>While you rest here interdimensional traveller, can i entertain you with some coffee?</p>
    <h2><Link href="/"><a>Take me to the docking station</a></Link></h2>
    </div>
    </>
}