import NetlfixBanner from '../app/Image/Netflix/12.png'
import NetflixPictureone from '../app/Image/Netflix/1.png'
import NetflixPicturetwo from '../app/Image/Netflix/11.png'
import NetflixPicturethree from '../app/Image/Netflix/13.png'
import NetflixPicturefour from '../app/Image/Netflix/7.png'
import SpotifyBanner from '../app/Image/Spotify/image2.png'
import SpotifyPicture1 from '../app/Image/Spotify/image1.png'
import SpotifyPicture2 from '../app/Image/Spotify/image3.png'
import SpotifyPicture3 from '../app/Image/Spotify/image4.png'
import SpotifyPicture4 from '../app/Image/Spotify/image2.png'
import MapleBanner from '../app/Image/Maple_54/Screenshot 2026-02-19 120016.png'
import MaplePicture1 from '../app/Image/Maple_54/2.png'
import MaplePicture2 from '../app/Image/Maple_54/3.png'
import MaplePicture3 from '../app/Image/Maple_54/4.png'
import MaplePicture4 from '../app/Image/Maple_54/5.png'
import AiBanner from "../app/Image/Ai/1.png"
import Ai1 from "../app/Image/Ai/2.png"
import Ai2 from "../app/Image/Ai/3.png"
import Ai3 from "../app/Image/Ai/4.png"
import Ai4 from "../app/Image/Ai/5.png"
import BlogBanner from "../app/Image/Newfolder/1.png"
import Blog1 from "../app/Image/Newfolder/2.png"
import Blog2 from "../app/Image/Newfolder/3.png"

export const Projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Building this Netflix clone was an exercise in creating a cohesive full-stack ecosystem by framing the backend logic in NestJS and the frontend in Next.js. I engineered a custom authentication system centered on JSON Web Tokens (JWT), where the NestJS server issues a token upon login that is stored in the browser's LocalStorage. This token acts as a persistent credential for a custom Auth Guard I developed: the app automatically checks for the JWT on load, instantly routing recognized users to the browse page while funneling new visitors through a multi-step onboarding process. This funnel replicates a real-world subscription journey, featuring a hard-coded plan selection interface and a full Stripe API integration to handle secure checkout and payment processing within a sandbox environment. The core user experience is driven by dynamic data mapping, where movie content is fetched via external URLs and rendered into responsive rows using React's .map() function. To ensure a seamless &",
    
    bannerImage: NetlfixBanner,

    images: [
      NetflixPictureone,
      NetflixPicturetwo,
      NetflixPicturethree,
     NetflixPicturefour,
    ],

    tech: {
      next: true,
      nest: true,
      mongo: true,
      typescript: true,
      tailwind: true,
      cloudinary: true,
      stripe:true
    },
  },

  {
    id: 2,
    title: "Spotify Clone",
    description:
      "This project is a static Spotify UI clone designed to replicate the layout and visual structure of the original Spotify web application. It focuses purely on the user interface, including the sidebar navigation, playlist sections, music cards, and overall responsive layout. The goal was to practice building clean, structured, and reusable components while maintaining accurate spacing, typography, and design consistency. Through this project, I improved my understanding of modern UI design principles and frontend layout techniques.",
    
    bannerImage: SpotifyBanner,

    images: [
      SpotifyPicture1,
      SpotifyPicture2,
      SpotifyPicture3,
     SpotifyPicture4,
    ],

    tech: {
      next: true,
      nest: false,
      mongo: false,
      typescript: true,
      tailwind: true,
      cloudinary: false,
      stripe:false
    },
  },

  {
    id: 3,
    title: "Maple 54",
    description:
      "This project is a full UI clone of the Maple54 online advertising page, meticulously recreated to mirror the original site’s layout, design, and interactive states. It includes responsive navigation, UI states (such as hover, focus, active, and form input states), and pixel-perfect styling that reflects the real Maple54 experience. The focus of the project was purely on visual fidelity and interface behavior, not functional backend or dynamic data. Through this clone, I strengthened my skills in UI design, component structuring, and managing multiple UI states to create an engaging and accurate static replica.",
    
    bannerImage: MapleBanner,

    images: [
      MapleBanner,
      MaplePicture1,
      MaplePicture2,
      MaplePicture3,
      MaplePicture4,
    ],

    tech: {
      next: true,
      nest: false,
      mongo: false,
      typescript: false,
      tailwind: true,
      stripe: false,
      cloudinary:false
    },
  },
  {
    id: 4,
    title: "Chatbot/Assitant Ai",
    description:
      "This project is an AI-powered chatbot assistant designed with a relaxed, conversational personality while also performing real application tasks. The assistant can interact naturally with users and execute actions such as changing the application theme and managing a to-do list. The frontend was built using Next.js, while the backend was developed with NestJS to handle API logic and task execution. AI responses were powered through Groq’s integration with OpenAI models, enabling fast and context-aware conversations. This project strengthened my understanding of full-stack architecture, AI integration, and connecting conversational interfaces with real application functionality.",
    
    bannerImage: AiBanner,

    images: [
      AiBanner,
      Ai1,
      Ai2,
      Ai3,
      Ai4,
    ],

    tech: {
      next: true,
      nest: true,
      mongo: false,
      typescript: true,
      tailwind: true,
      stripe: false,
      cloudinary:false
    },
  },
  {
    id: 5,
    title: "Blogging Website",
    description:
      "This project is a full-stack blogging platform built entirely with Next.js, utilizing its built-in API routes for backend functionality. Users can create blog posts by submitting content and uploading an image. The blog data is stored in MongoDB, while images are uploaded and managed through Cloudinary for optimized storage and delivery. The homepage dynamically displays all published blogs, and each post has its own dynamically generated route where the full content and image are rendered. This project helped me strengthen my understanding of full-stack development, database integration, cloud-based media handling, and dynamic routing in modern web applications.",
    
    bannerImage: BlogBanner,

    images: [
      BlogBanner,
      Blog1,
      Blog2,
   
    ],

    tech: {
      next: true,
      nest: false,
      mongo: true,
      typescript: true,
      tailwind: true,
      stripe: false,
      cloudinary:true
    },
  },
];
