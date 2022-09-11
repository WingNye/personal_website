import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-400'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Wing, nice to meet you. Please feel free explore.</p>
                    </div>
                    <div>
                        <p>I am passionate about building software that is going to improve the lives
                            of those around me. While I have a basic knowledge of software development 
                            currently, I have created software as practice for individuals and 
                            small-busineses. As I progress through my years of undergrad I am going 
                            refurbish my programming skills and work my way up to working for a corporation
                            or company.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About