import React from 'react'
import Header from '../component/Header'
import Cards from '../component/Cards'
import Card2 from '../component/Card2'
import Footer from '../component/Footer'

type Props = {}

const Test = (props: Props) => {
  return (
    <div className='m-4'>
        <div className="">
        <Header/>
        </div>

        <div className="flex flex-col items-center mt-3">
            <p>Blog</p>
            <h2 className='text-4xl'>Thoughts and words</h2>
        </div>

        <div className="">
      <section className="grid grid-cols-2 md:flex-row items-center mt-14 mb-12">
        <div className="">
          <img 
            src="img-hero.png" 
            alt="Blog thumbnail" 
            className=""
          />
        </div>
        <div className=" w-full">
          <p className="font-semibold">Category <span className='font-normal'>November 22, 2021</span></p>
          <h2 className="text-2xl">Pitch termsheet backing validation focus release.</h2>
          <div className="flex items-center mt-4 space-x-2">
            <img 
              src="Ellipse-1.png" 
              alt="Author avatar" 
              className=""
            />
            <p className="text-gray-600">Chandler Bing</p>
          </div>
        </div>
      </section>
      </div>

        <div className="border border-b-1 border-black"></div>
        
        <div className="">
            <Cards/>
        </div>

        <div className="">
            <Card2/>
        </div>

        <div className="">
            <Footer/>
        </div>

    </div>
    
  )
}

export default Test