import React from 'react'

const DataOf6 = ({ Heading, Description, Code1, Code2, Code3, Code4, Code5, Code6, Code1Desc, Code2Desc, Code3Desc, Code4Desc, Code5Desc, Code6Desc }) => {

    return (
        <div className="py-1 text-white ">
            {/* Top Section */}
            <div className="flex flex-col justify-center items-center">
                {/* Header  */}
                <h1 className="text-white text-center text-[35px] font-black">
                    {Heading}
                </h1>
                {/* Header Description */}
                <p className="text-center">
                    {Description}
                </p>
            </div>

            {/* Command Section  */}
            <div className="mt-1 ">
                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer">
                        {Code1}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center">
                        {Code1Desc}
                    </p>
                </div>

                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer">
                        {Code2}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center">
                        {Code2Desc}
                    </p>
                </div>

                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer">
                        {Code3}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center">
                        {Code3Desc}
                    </p>
                </div>

                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer">
                        {Code4}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center">
                        {Code4Desc}
                    </p>
                </div>

                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer">
                        {Code5}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center">
                        {Code5Desc}
                    </p>
                </div>

                <div className="p-2 my-3 bg-[#424242] rounded-lg flex flex-col justify-center items-center">
                    {/* Command */}
                    <p className="bg-[#D9D9D9] text-black px-5 py-3 rounded-lg font-firaCode text-[13.65px] font-black cursor-pointer">
                        {Code6}
                    </p>
                    {/* Command Description  */}
                    <p className="mt-1 text-center">
                        {Code6Desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DataOf6