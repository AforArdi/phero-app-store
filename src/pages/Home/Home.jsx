import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import Navbar from "../../components/shared/Navbar";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {
    return ( 
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
     );
}
 
export default Home;