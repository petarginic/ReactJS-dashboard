import React from 'react';
import Header from '../components/Header';
import PageContent from '../components/PageContent';
import CardUser from '../components/CardUser';
import Hero from "../components/Hero";

const Profile = () => {
  return (
    <>
     <Header title="Petar Ginic " description="Edit or add new information"/> 

        <PageContent>
            <div class="grid grid-cols-3 gap-4">

                <div className="flex justify-center items-center ">
                    <CardUser 
                        title="Petar Ginic"
                        description="Hi, my Name is Petar. A am informatics engineer."
                        status="active"
                        member="24.12.2017"
                        image="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png"
                    />
                </div>

                <div className="col-span-2 flex justify-center items-center">
                    <Hero 
                        title="My completed"
                        description="PHP Language, PHP Avvancedm SQL(MySQL) HTML5/CSS/SASS,Bootstrap, Tailwind, Javascript, C, Python,JavaScript,ReactJS..."
                        idea=" Courses"
                        button1="All Courses"
                        button2="My Favorites"
                    />
                </div>
                
            </div>
        </PageContent>
    </>
  )
}

export default Profile