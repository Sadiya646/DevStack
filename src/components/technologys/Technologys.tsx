import { use } from "react";
import type { technologyType } from "../types/technologyType";
import ExploreTechnologies from "./ExploreTechnologies";
interface TechnologyProps{
    technologiesPromise:Promise<technologyType[]>
}

const Technologys = ({technologiesPromise}:TechnologyProps) => {
    // promise theke data pete hole hook use korte hbe ,react 19 version er ekta hook
    const technology=use(technologiesPromise)
    console.log("tech",technology);
    return (
        <div>
           <ExploreTechnologies Technologys={technology}/>
            
        </div>
    );
};

export default Technologys;