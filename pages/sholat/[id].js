//https://stackoverflow.com/questions/48621533/how-convert-date-format-in-javascript-reactjs
import { format } from 'date-fns';
export const getStaticPaths = async () => {
    const res = await fetch('https://api.myquran.com/v1/sholat/kota/semua')
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
    const current = new Date();
    const date = format(current, 'yyyy/MM/dd');
    const id = context.params.id
    const res = await fetch('https://api.myquran.com/v1/sholat/jadwal/'+ id + '/' + date)
    const data = await res.json()
  
    return{
      props: {sholat: data.data, wilayah: id, tanggal: date}
    }
}

const Details = ({sholat, tanggal}) => {
    return ( 
        <>
             <div>
                <h1>{sholat.lokasi} @ {tanggal}</h1>
            </div>
            <div>
                <h3>Imsak : {sholat.jadwal.imsak}</h3>
                <h3>Subuh : {sholat.jadwal.subuh}</h3>
                <h3>Terbit : {sholat.jadwal.terbit}</h3>
                <h3>Dhuha : {sholat.jadwal.dhuha}</h3>
                <h3>Dzuhur : {sholat.jadwal.dzuhur}</h3>
                <h3>Ashar : {sholat.jadwal.ashar}</h3>
                <h3>Maghrib : {sholat.jadwal.maghrib}</h3>
                <h3>Isya : {sholat.jadwal.isya}</h3>
            </div>
        </>
     );
}
 
export default Details;