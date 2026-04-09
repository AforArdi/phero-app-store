import { useParams } from "react-router";
import useAppsData from "../../hooks/useAppsData";
import { PropagateLoader } from "react-spinners";
import { useContext } from "react";
import { AppInstallContext } from "../../components/context/AppInstallContext";

const AppDetails = () => {
    const {apps, loading} = useAppsData();
    const {id} = useParams();
    const expectedApp = apps.find(app=> app.id == id);

    const {setInstalled} = useContext(AppInstallContext);

    const handleInstalled=()=>{
        setInstalled(prev=>([
            ...prev,
            expectedApp
        ]));
    }

    return ( 
        <div className="card w-96 bg-base-100 card-xs shadow-sm">
            {loading ? 
            <div className="flex justify-center">
                <PropagateLoader color="#AD46FF"></PropagateLoader>
            </div>
            :
            <div className="card-body">
                <div className="flex">
                    <img src={expectedApp.image} alt={expectedApp.title}
                    className="h-40 w-auto"
                    />
                </div>
                <div>
                    <h2 className="card-title">{expectedApp.title}</h2>
                    <p className="text-[20px]">Developed By: <span className="text-purple-500">{expectedApp.companyName}</span></p>
                </div>
                <button onClick={handleInstalled} className="btn bg-purple-500">Install</button>
            </div>
            }
        </div>
     );
}
 
export default AppDetails;