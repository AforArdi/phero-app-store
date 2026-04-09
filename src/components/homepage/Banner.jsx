import bannerImg from '../../assets/images/hero.png'

const Banner = () => {
    return ( 
        <div className="container mx-auto flex flex-col items-center gap-4 mt-10">
            <h1 className="font-bold text-6xl text-center">We Build <br />
            <span className="text-purple-500">Productive</span> Apps
            </h1>
            <p className="text-[20px] text-[#627382] w-[60%] text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <img src={bannerImg} alt="" />
        </div>
     );
}
 
export default Banner;