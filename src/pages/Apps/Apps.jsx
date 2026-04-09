import { PropagateLoader } from "react-spinners";
import AppCard from "../../ui/AppCard";
import useAppsData from "../../hooks/useAppsData";

const Apps = () => {
    const {apps, loading} = useAppsData();
    return ( 
        <div className="container mx-auto">
            <div className="text-center space-y-2 mt-10 mb-10">
                <h2 className="font-bold text-5xl">Our Applications</h2>
                <p className="text-[16px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>
            {loading ? 
            (<div className="flex justify-center">
                <PropagateLoader color="#AD46FF"></PropagateLoader>
            </div>)
            : 
            (<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    apps.map(app=>{
                        return (
                            <AppCard key={app.id} app={app}></AppCard>
                        )
                    })
                }
            </div>)
            }
        </div>
     );
}
 
export default Apps;