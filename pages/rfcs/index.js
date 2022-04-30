import Link from 'next/link'
import styles from '../../styles/Blogs.module.css'

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://stackoverflow.com/questions/65777441/how-to-fetch-api-data-from-axios-inside-the-getserversideprops-function-in-nextj
export const getStaticProps = async () => {
    const res = await fetch('http://localhost:4321/api/v1/api_tests',{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE2NTEzODYxMTh9.AFQZoI9E9J6H5vfZVolYZe97UDsk6ZD4Ye8fd4bCRR0'
        }
    })
    const data = await res.json()
  
    return{
      props: {rfcs: data.body}
    }
  }

const Rfcs = ({rfcs}) => {
    return ( 
        <div>
            <h1>Rfc coyy</h1>
            {rfcs.map(blog => (
                <Link href={'/rfcs/' + blog.id} key={blog.id}>
                <a className={styles.single}>
                    <h3>{blog.nama}</h3>
                </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Rfcs;