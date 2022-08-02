import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PageContent from '../components/PageContent'

const Home = () => {
  return (
    <>    
        <Header title="Welcome back Petar Ginic" description=" Learn somenthing new every day! "/>
        <PageContent>
            <Hero 
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!"
                title="Build Your New "
                idea="Idea"
                button1="Get Started"
                button2="Learn More"
            />
        </PageContent>
    </>
  )
}

export default Home