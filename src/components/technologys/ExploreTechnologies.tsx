import type { technologyType } from "../types/technologyType";

interface ExploreTechnologiesProps {
    Technologys: technologyType[];
}

const ExploreTechnologies = ({ Technologys }: ExploreTechnologiesProps) => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-4xl font-extrabold text-gray-900">Explore the <span className="text-pink-600">Technologies</span></h2>
            <p className="text-gray-500 mt-2 text-base">Pick one technology per category to build your ideal stack.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Technologys.map((technology) => {
                        return (
                            <div 
                                key={technology.id} 
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center justify-between">
                                    <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain" />
                                    <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full">
                                        {technology.badge}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-800">{technology.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{technology.description}</p>
                                
                                <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t border-gray-100">
                                    <span>Rating: ⭐ {technology.rating}</span>
                                    <span className="font-medium text-gray-700">{technology.difficulty}</span>
                                </div>
                                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors shadow-sm">
                                            Add to Stack
                                        </button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ExploreTechnologies;