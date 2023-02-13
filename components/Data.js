import React from 'react'

const Data = ({ Heading, Description, Code1, Code2, Code1Desc, Code2Desc }) => {

    return (
        <div className=' p-2 '>
            {/* Setup */}
            <div className=' text-white'>
                <h1 className=' text-[42.53px] text-[#2982b9] '>{Heading}</h1>
                {/* Description */}
                <div className=' text-[18.53px] font-semibold '>
                    <p>{Description}</p>
                </div>
                {/* Code */}
                <div className=' bg-[#d9d9d9] text-black inline-block px-5 py-2 rounded-xl mt-5 '>
                    <pre>
                        <code>
                            {Code1}
                        </code>
                    </pre>
                    {/* Code Description */}
                    <div>
                        {Code1Desc}
                    </div>
                    <pre>
                        <code>
                            {Code2}
                        </code>
                    </pre>
                    <div>
                        {Code2Desc}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Data