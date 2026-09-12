import { useState } from "react";
import type { technologyType } from "../types/technologyType";
import { toast } from "react-toastify";

interface ExploreTechnologiesProps {
    Technologys: technologyType[];
}

const ExploreTechnologies = ({ Technologys }: ExploreTechnologiesProps) => {

    // 1.select kora technology joma rakhar jonno
const[selectedStack,setSelectedStack]=useState<technologyType[]>([])



// 2. button click korle sstack a jog korar function
const handleAddToStack=(tech:technologyType)=>{

    // check kora hocche item ache kina
const isAlreadySelected = selectedStack.find((item) => item.id === tech.id);
        if (isAlreadySelected) {
            toast.warning("This technology is already selected in your stack!!")
            return;
            
        }
        setSelectedStack([...selectedStack, tech]);
        toast.success(`${tech.name} added to stack!`)
}



const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.error("All technologies removed from stack!");
    };



    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-4xl font-extrabold text-gray-900">
                Explore the <span className="bg-brand-gradient bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--brand-gradient)" }}>Technologies</span>
            </h2>
            <p className="text-gray-500 mt-3 text-xl mb-8">
                Pick one technology per category to build your ideal stack.
            </p>
            
            {/* card and stack */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                
                
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        Technologys.map((technology) => {
                            const isAdded = selectedStack.some((item) => item.id === technology.id);
                            return (
                                <div 
                                    key={technology.id} 
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-400 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                                >
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <img src={technology.icon} alt={technology.name} className="w-10 h-10 object-contain" />
                                            <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full">
                                                {technology.badge}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-800 mt-4">{technology.name}</h3>
                                        <p className="text-gray-600 text-sm mt-2">{technology.description}</p>
                                    </div>
                                    
                                    <div>
                                        <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t border-gray-100 mb-4">
                                            <span>Rating: ⭐ {technology.rating}</span>
                                            <span className="font-medium text-gray-700">{technology.difficulty}</span>
                                        </div>
                                        
                                     <button 
                        onClick={() => handleAddToStack(technology)}
                        disabled={isAdded} 
                        className={`w-full font-medium py-2.5 px-4 rounded-xl text-sm transition-colors shadow-sm ${
                            isAdded 
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-gray-900 hover:bg-gray-800 text-white"     
                        }`}
                    >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="lg:col-span-1 sticky top-24">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-600">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
                        <p className="text-gray-400 text-xs mb-6">
                            {selectedStack.length === 0 ? "No technologies selected yet." : `${selectedStack.length} Technology Selected`}
                        </p>
                        
                        {selectedStack.length === 0 ? (
                            <div className="border-2 border-dashed border-gray-100 rounded-xl p-8 text-center">
                                <p className="text-gray-400 text-sm">Your stack is empty.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {selectedStack.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/50">
                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                                                <p className="text-xs text-gray-500">{item.category}</p>
                                            </div>
                                        </div>
                                 <button 
                                            onClick={() =>
                                            setSelectedStack(selectedStack.filter(s => s.id !== item.id))}
                                            className="text-gray-400 hover:text-red-500 text-sm font-bold px-2"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}

                                <button 
                                    onClick={handleRemoveAll}
                                    className="w-full mt-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
                                >
                                    Remove All
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>



        
    );
};

export default ExploreTechnologies;
