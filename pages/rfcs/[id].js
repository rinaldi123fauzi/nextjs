export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4321/api/v1/api_tests',{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE2NTEzODYxMTh9.AFQZoI9E9J6H5vfZVolYZe97UDsk6ZD4Ye8fd4bCRR0'
        }
    })
    const data = await res.json()
    const paths = data.body.map(blog => {
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
    const res = await fetch('http://localhost:4321/api/v1/api_tests/' + id,{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3LCJleHAiOjE2NTEzODYxMTh9.AFQZoI9E9J6H5vfZVolYZe97UDsk6ZD4Ye8fd4bCRR0'
        }
    })
    const data = await res.json()

    return {
        props: {blog: data.body}
    }
}

const Details = ({blog}) => {
    return ( 
        <div>
            <h1>{blog.nama}</h1>
            <p>{blog.alamat}</p>
        </div>
     );
}
 
export default Details;