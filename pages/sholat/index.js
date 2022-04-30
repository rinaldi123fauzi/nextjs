import Link from 'next/link'
import styles from '../../styles/Blogs.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://api.myquran.com/v1/sholat/kota/semua')
  const data = await res.json()

  return{
    props: {wilayah: data}
  }
}

const Sholat = ({wilayah}) => {
    return ( 
        <div>
            <h1>Sholat time</h1>
            {wilayah.map(blog => (
                <Link href={'/sholat/' + blog.id} key={blog.id}>
                <a className={styles.single}>
                    <h3>{blog.lokasi}</h3>
                </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Sholat;