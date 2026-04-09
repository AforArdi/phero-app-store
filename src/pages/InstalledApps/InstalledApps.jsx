import { useContext } from "react";
import { AppInstallContext } from "../../components/context/AppInstallContext";
import { toast } from "react-toastify";

const InstalledApps = () => {
    const {installed, setInstalled} = useContext(AppInstallContext);
    

    const handleUninstall=(app)=>{
        const filteredApps = installed.filter(item=> item.id != app.id);
        setInstalled(filteredApps);
        toast.warning(`Uninstalled ${app.title}!`);
    }

    return ( 
        <div className="container mx-auto mt-5 space-y-5">
            {
                installed.map(item=>{
                    return (
                        <div key={item.id} className="card card-side bg-base-100 shadow-sm p-3">
                            <figure>
                                <img
                                src={item.image}
                                alt={item.title}
                                className="h-20 w-auto"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                            </div>
                            <button onClick={()=>handleUninstall(item)} className="btn bg-purple-500 text-white">Uninstall</button>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default InstalledApps;