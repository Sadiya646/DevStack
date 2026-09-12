import Image from '../assets/banner-stack.png'
const Banner = () => {
    return (
    <section className='max-w-7xl mx-auto px-6 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
                
                {/* Left  */}
                <div className='max-w-xl space-y-6'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
                        Build Your Ideal <br />
                        <span className='bg-brand-gradient bg-clip-text text-transparent'
                        style={{ backgroundImage: "var(--brand-gradient)" }}
                        >
                            Development Stack
                        </span>
                    </h1>
                    
                    <p className='text-gray-600 text-base sm:text-lg leading-relaxed'>
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    
                    {/* Btn*/}
                    <div className='flex flex-wrap items-center gap-4 pt-2'>
                        <button className='px-6 py-3  text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-md'
                         style={{ background: "var(--brand-gradient)" }}
                        >
                            Explore Technologies
                        </button>
                        <button className='px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-400 transition-colors bg-white'>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* img */}
                <div className='w-full max-w-md lg:max-w-lg'>
                    <img src={Image} alt="n" className='w-full h-auto object-contain' />
                </div>

            </div>
        </section>
    );
};

export default Banner;