import Layout from '../../layouts/layout';
import Navbar from '../../components/navbar';
import data from '../../dataset/terbaru.json';

function Main(){
  return (
    <Layout>
        <Navbar/>
        {data.map((data, index) => 
        <div key={index}>
            <section>
                <div>
                    <img src={data.img} width="400 px" height="240 px"/>
                    <h3>{data.judul}</h3>
                    <h5>{data.date}</h5>
                    <button><a href={data.link}>Baca</a></button>
                </div>
            </section>
        </div>
        )}
    </Layout>
  )
}
  

export default Main;