import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsKanban } from 'react-icons/bs';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';



export const links = [
 

  {
    title: 'Pages',
    links: [
      {
        name: 'home',
        icon: <HomeOutlinedIcon />,
      },
      {
        name: 'profile',    
        icon: <AccountCircleOutlinedIcon />,
      },
      {      
        name: 'courses',
        icon: <LaptopChromebookOutlinedIcon />,
      },
          {
        name: 'favorite-courses',   
        icon: <FavoriteBorderOutlinedIcon />,
      },
      {
        name: 'professors',
        icon: <PeopleAltOutlinedIcon />,
      },
    ],
  },

   {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'To-Do',
        icon: <BsKanban />,
      },
     
    ],
  },
 

   {
    title: 'Follow us on:',
    links: [
      {
        name: 'facebook',
        icon: <FacebookIcon />,
      },

      {
        name: 'instagram',
        icon: <InstagramIcon />,
      },

      {
        name: 'youtube',
        icon: <YouTubeIcon />,
      },
    ],
  },
 
];

export const courses = [
  {
    image:
      product1,
    title: 'React JavaScript Library',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:1,
  },
  {
    image:
      product2,
    title: 'The Complete Python Course ',
    description: 'Master Python by building 100 projects in 100 days.',
    favorite: false,
    isAdded: false,
    id:2,
  },{
    image:
      product3,
    title: 'PHP, Laravel and more',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:3,
  },
  {
    image:
      product4,
    title: 'HTML,CSS,Bootstrap,SASS',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:4,
  },
  {
    image:
      product5,
    title: 'Learn JAVA from scratch',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:8
  },
  {
    image:
      product8,
    title: 'Angular Course',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:7,
  },
  {
    image:
      product7,
    title: 'NodeJS, MongoDB advanced',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:5,
  },
 {
  image:
      product6,
    title: 'C,C++ for begginers',
    description: 'Learn React by building eight real-world projects and solving 140+ coding challenges',
    favorite: false,
    isAdded: false,
    id:6,
  },
  
];

export const tasks = [
  {
    
    id:1,
    title: 'Go to the gym',  
    done: false,

    
  },
  {
     id:2,
    title: 'Food shoping',  
    done: false,
  },{
    
    id:3,
    title: 'Pay bills',  
    done: false,
  },
 
  
];

export const users = [
  {
    image:
      avatar4,
    
    name: 'Petar Ginic',
    mail: 'petarginic@gmail.com',
    role: 'Admin',
    rating: 5
  },
  {
    image:
      avatar,
    name: 'Djordje Andjelkovic',
    mail: 'djordje.andjelkovic@gmail.com',
    role: 'Admin',
    rating: 3
  },
  {
    image:
      avatar4,
    name: 'Milos Jovanovic',
    mail: 'milos.j@yahoo.com',
    role: 'Student',
    rating: 5
  },
  {
    image:
      avatar3,
    name: 'Darko Glisic',
    mail: 'darko1245@gmail.com',
    role: 'Student',
    rating: 4
  },
   {
    image:
      avatar2,
    name: 'Milica Nedic',
    mail: 'nedic992@gmail.com',
    role: 'Admin',
    rating: 4
  },
  {
    image:
      avatar,
    name: 'Jovana Kulic',
    mail: 'jovana.ku@gmail.com',
    role: 'Studend',
    rating: 3.9
  },
  {
    image:
      avatar2,
    name: 'Natasa Miljkovic',
    mail: 'nata0012@gmail.com',
    role: 'Student',
    rating: 4.5
  },
  {
    image:
      avatar3,
    name: 'Nenad Pavlovic',
    mail: 'nenad.p@hotmail.com',
    role: 'Admin',
    rating: 4
  },
  {
    image:
      avatar4,
    name: 'Boris Vlacic',
    mail: 'boris.vlacic@infostan.com',
    role: 'Admin',
    rating: 3
  },
];

