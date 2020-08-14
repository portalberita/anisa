import dummt from '../../dataset/dummy.json';
import Layout from '../../layouts/layout';
import Navbar from '../../components/navbar';

const Artikel = (props) => {
    return (
        <Layout>
            <Navbar/>
            <div>
                <br/>
                <h1>{props.judul}</h1>
                <h5>{props.date}</h5>
                <br/>
                <img src={props.img}/>
                <br/>
                <br/>
                <p>{props.isi}</p>
                <br/>
                <br/>
            </div>
        </Layout>
    )
}

export default Artikel;

// export async function getStaticProps(context){
//     let kode = context.params.kode;
//     let data = dummt.find(x => x.id == kode);

//     let {judul, isi} = data;

//     return {
//         props : {
//             judul, isi
//         }
//     }
// }

export async function getServerSideProps(context){
    let kode = context.params.kode;
    let data = dummt.find(x => x.id == kode);
    // ambil judul & isi dari data hasil pencarian
    let { img, judul, date, isi } = data;
    return {
        props : {
        // kirim judul & isi sebagai properti ke komponen utama
            img, judul, date, isi
        }
    }
   }
   

// export async function getStaticPaths(){
//     return {
//         paths : [
//             {params : {kode : '1'}},
//             {params : {kode : '2'}},
//             {params : {kode : '3'}}
//         ],
//         fallback : false
//     }
// }