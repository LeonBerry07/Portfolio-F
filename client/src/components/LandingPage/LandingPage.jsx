import React from "react";
import { Link } from "react-router-dom";
import'./LandingPage.css'

// const url = 'https://www.autonomosyemprendedor.es/media/autonomosyemprendedor/images/2023/03/29/2023032917453731776.jpg';
// const url2 = 'https://media.revistagq.com/photos/645dde361c98f4b147443172/16:9/pass/100%20mejores%20videojuegos%20gq.png';
const url3 = 'https://evelongames.com/wp-content/uploads/2022/11/Kratos-portada-1536x864.jpg';
const url4 = 'https://assetsio.reedpopcdn.com/139765141361.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp';
const url5 = 'https://www.egames.news/__export/1683919323424/sites/debate/img/2023/05/12/spider-man-insomniac-games-sony-1.jpg_554688468.jpg';
const url6 = 'https://www.mundodeportivo.com/alfabeta/hero/2023/04/hd-wallpaper-the-black-suit-spiderman-spiderman-superheroes-artist-artwork-digital-art-deviantart.jpg?width=1200';
const url7 = 'https://images7.alphacoders.com/129/1292770.png';
const url8 = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/10/assassins-creed-2115643.jpg?tf=3840x';
const url9 = 'https://malditosnerds.com/wp-content/uploads/2022/10/uncharted-portada-750x405jpg-copyjpg.jpg';
const url10 = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/04/The-Last-of-Us-Remake-PS5-1.jpg';
const url11 = 'https://i.blogs.es/aaa129/1136691/1366_2000.jpeg';
const url12 = 'https://assetsio.reedpopcdn.com/Batman-Arkham-Knight2.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp';
const url13 = 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EMGRLDPUQRCBJL243GN5HZGNMM.jpg';
const url14 = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2012/03/153759-fifa-street-golea-reino-unido.jpg?tf=3840x';
const url15 = 'https://images.pushsquare.com/676898d548e1f/littlebigplanet.large.jpg';
const url16 = 'https://c4.wallpaperflare.com/wallpaper/601/497/256/video-games-infamous-wallpaper-preview.jpg';

class LandingPage extends React.Component{

    render() {
        return(
            <div className="landingpage">
                <div>
                <img className="img" src={url4} alt="Food's Lyon"/>
                <img className="img" src={url3} alt="Food's Lyon"/>
                <img className="img" src={url9} alt="Food's Lyon"/>
                <img className="img" src={url12} alt="Food's Lyon"/>
                </div>
                <div>
                <img className="img" src={url5} alt="Food's Lyon"/>
                <img className="img" src={url8} alt="Food's Lyon"/>
                <img className="img" src={url6} alt="Food's Lyon"/>
                </div>
                <button className='home'>
                <Link to="/home">Home</Link>
                </button>
                <div>
                <img className="img" src={url11} alt="Food's Lyon"/>
                <img className="img" src={url7} alt="Lyon"/>
                <img className="img" src={url10} alt="Food's Lyon"/>
                </div>
                <div>
                <img className="img" src={url13} alt="Food's Lyon"/>
                <img className="img" src={url14} alt="Food's Lyon"/>
                <img className="img" src={url15} alt="Food's Lyon"/>
                <img className="img" src={url16} alt="Food's Lyon"/>
                </div>
            </div>
            

        )
    }

}

export default LandingPage;