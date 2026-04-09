import { useEffect, useState } from "react";
import AppCard from "../../ui/AppCard";
import { Link } from "react-router";

const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    if(loading){
        
    }
    useEffect(()=>{
        const dataFetch = async ()=>{
            const res = await fetch('/data.json');
            const data = await res.json();
            setApps(data);
            setLoading(false)
        }
        dataFetch();
    }, []);

    return ( 
        <div className="container mx-auto mt-10 space-y-8">
            <div className="text-center space-y-2">
                <h2 className="font-bold text-5xl">Trending Apps</h2>
                <p className="text-[16px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    apps.slice(0, 9).map(app=>{
                        return (
                            <AppCard key={app.id} app={app}></AppCard>
                        )
                    })
                }
            </div>
            <div className="flex justify-center">
                <Link to={'/apps'} className="btn bg-purple-500 text-white">View All</Link>
            </div>
        </div>
     );
}
 
export default TrendingApps;