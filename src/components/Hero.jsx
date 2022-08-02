import React from 'react'
import {Link} from 'react-router-dom';

const Hero = (props) => {
  return (
    <>
        <div className="flex bg-white" style={{ height: 600 }}>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 bg-slate-50">             
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">{props.title}<span className="text-indigo-600">{props.idea}</span></h2>
                            <p className="mt-2 text-sm text-gray-500 md:text-base">{props.description}</p>
                            <div className="flex justify-center lg:justify-start mt-6">
                                <Link className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" >{props.button1}</Link>
                                <Link className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" >{props.button2}</Link>
                            </div>
                        </div>
                </div>
                <div className="hidden lg:block lg:w-1/2" >
                    <div className="h-full object-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&                    ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')",  }}>                               
                        <div className="h-full bg-black opacity-25"></div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Hero

 