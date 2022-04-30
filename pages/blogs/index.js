import styles from '../../styles/Blogs.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return{
    props: {blogs: data}
  }
}

const Blogs = ({blogs}) => {
  return ( 
    <div>
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <a className={styles.single}>
            <h3>{blog.name}</h3>
          </a>
        </div>
      ))}
    </div>
   );
}
 
export default Blogs;