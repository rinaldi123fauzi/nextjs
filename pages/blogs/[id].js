export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(blog => {
        return{
            params: {id: blog.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data = await res.json()

    return {
        props: {blog: data}
    }
}

const Details = ({blog}) => {
    return ( 
        <div>
            <h1>{blog.name}</h1>
            <p>{blog.email}</p>
            <p>{blog.website}</p>
            <p>{blog.address.city}</p>
        </div>
     );
}
 
export default Details;