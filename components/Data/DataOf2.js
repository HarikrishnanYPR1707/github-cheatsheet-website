import React from 'react'

const DataOf2 = ({ Heading, Description, Code1, Code2, Code1Desc, Code2Desc }) => {

    return (
        <div className="py-1 text-white md:w-10/12 lg:w-3/4">
            {/* Top Section */}
            <div className="flex flex-col justify-center items-center">
                {/* Header  */}
                <h1 className="text-white text-center text-[35px] font-black md:text-[40px] lg:text-[50px]">
                    {Heading}
                </h1>
                {/* Header Description */}
                <p className="text-center">
                    {Description}
                </p>
            </div>

            {/* Command Section  */}
            <div className="mt-1">
                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center lg:p-5">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer lg:text-[16px]">
                        {Code1}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center lg:text-[16px]">
                        {Code1Desc}
                    </p>
                </div>

                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer lg:text-[16px]">
                        {Code2}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center lg:text-[16px]">
                        {Code2Desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DataOf2