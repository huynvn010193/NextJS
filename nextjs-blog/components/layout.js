import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Your name';
export const siteTile = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.icon" />
      </Head>
    </div>
  )
}