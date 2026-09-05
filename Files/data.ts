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

// FinWise AI
import FinwiseBanner from "../app/Image/Finwise/1.png"
import Finwise1 from "../app/Image/Finwise/2.png"
import Finwise2 from "../app/Image/Finwise/3.png"
import Finwise3 from "../app/Image/Finwise/4.png"
import Finwise4 from "../app/Image/Finwise/5.png"

// TechBot
import TechbotBanner from "../app/Image/Techbot/1.png"
import Techbot1 from "../app/Image/Techbot/2.png"
import Techbot2 from "../app/Image/Techbot/3.png"


// MediGuide AI
import MediguideBanner from "../app/Image/Mediguide/1.png"
import Mediguide1 from "../app/Image/Mediguide/2.png"
import Mediguide2 from "../app/Image/Mediguide/3.png"
import Mediguide3 from "../app/Image/Mediguide/4.png"
import Mediguide4 from "../app/Image/Mediguide/5.png"
import Mediguide5 from "../app/Image/Mediguide/6.png"

import RagBanner from "../app/Image/RAG/1.png"
import RagPicture1 from "../app/Image/RAG/2.png"



export const Projects = [
  
{
  id: 1,
  title: "RAG AI Assistant",
  description:
    "An AI-powered Retrieval-Augmented Generation (RAG) application that allows users to upload documents and interact with their content through natural-language questions. The system processes documents, splits them into meaningful chunks, generates embeddings, and stores them in a FAISS vector database for efficient semantic retrieval. Relevant information is retrieved from the uploaded documents and provided to the language model as context, allowing the assistant to generate accurate, document-grounded responses instead of relying only on its general knowledge. The application was built with Python, LangChain, Streamlit, and an LLM API, giving me hands-on experience with document processing, vector databases, embeddings, retrieval pipelines, and LLM-based applications.",

  bannerImage: RagBanner,

  images: [
    RagPicture1,

  ],

  tech: {
    next: false,
    nest: false,
    mongo: false,
    typescript: false,
    tailwind: false,
    cloudinary: false,
    stripe: false,
    python: true,
    langchain: true,
    streamlit: true,
    faiss: true,
    ai: true
  },
},
  {
    id: 2,
    title: "FinWise AI",
    description:
      "FinWise AI is an AI-powered personal finance assistant designed to help users understand and manage their spending. The application allows users to enter expenses, define financial goals, select currencies, and receive personalized budgeting insights and recommendations. Built with Python, LangChain, Streamlit, and an LLM API, the project demonstrates how AI can be integrated into a practical financial application to analyze user data and generate useful, context-aware guidance.",

    bannerImage: FinwiseBanner,

    images: [
      FinwiseBanner,
      Finwise1,
      Finwise2,
      Finwise3,
      Finwise4,
    ],

    tech: {
      next: false,
      nest: false,
      mongo: false,
      typescript: false,
      tailwind: false,
      cloudinary: false,
      stripe: false,
      python: true,
      langchain: true,
      streamlit: true,
      ai: true
    },
  },

  {
    id: 3,
    title: "TechBot AI",
    description:
      "TechBot is an AI-powered technical assistant designed to provide users with intelligent and conversational support for technology-related questions. The project focuses on connecting a conversational AI interface with application logic to create a practical assistant rather than a simple chatbot. It demonstrates my experience working with Python, AI models, prompt-based interactions, and building user-friendly interfaces for AI-powered applications.",

    bannerImage: TechbotBanner,

    images: [
      TechbotBanner,
      Techbot1,
      Techbot2,
  
    ],

    tech: {
      next: false,
      nest: false,
      mongo: false,
      typescript: false,
      tailwind: false,
      cloudinary: false,
      stripe: false,
      python: true,
      ai: true
    },
  },

  {
    id: 4,
    title: "MediGuide AI",
    description:
      "MediGuide AI is an AI-powered medical symptom assessment prototype built with Python and Streamlit. Users can describe their symptoms and interact with an AI assistant to receive structured, informational guidance. The project demonstrates the use of AI APIs, prompt engineering, Python-based application logic, and Streamlit to create an accessible conversational healthcare interface while keeping the system focused on informational assistance rather than medical diagnosis.",

    bannerImage: MediguideBanner,

    images: [
      MediguideBanner,
      Mediguide1,
      Mediguide2,
      Mediguide3,
      Mediguide4,
      Mediguide5,
    ],

    tech: {
      next: false,
      nest: false,
      mongo: false,
      typescript: false,
      tailwind: false,
      cloudinary: false,
      stripe: false,
      python: true,
      streamlit: true,
      ai: true
    },
  },
{
    id: 5,
    title: "Netflix Clone",
    description:
      "A full-stack Netflix-inspired streaming platform built with Next.js and NestJS. The project features JWT-based authentication, protected routes, MongoDB integration, subscription plan selection, and Stripe sandbox checkout. Movie content is dynamically rendered through reusable React components, with a responsive interface designed to recreate the experience of a modern streaming platform.",

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
      stripe: true
    },
  },
  {
    id: 6,
    title: "Spotify Clone",
    description:
      "This project is a static Spotify UI clone designed to replicate the layout and visual structure of the original Spotify web application. It focuses on the user interface, including sidebar navigation, playlist sections, music cards, and responsive layouts. The project was built to strengthen my frontend development skills, particularly component-based development, responsive design, spacing, typography, and creating reusable UI structures.",

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
      stripe: false
    },
  },

  {
    id: 7,
    title: "Maple 54",
    description:
      "A detailed UI clone of the Maple54 online advertising platform, recreated to closely match the original website's layout, visual design, and interactive states. The project includes responsive navigation, hover and focus states, form interactions, and carefully structured components. The main goal was visual accuracy and frontend development practice, helping strengthen my understanding of UI design, responsive layouts, and component-based development.",

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
      cloudinary: false
    },
  },

  {
    id: 8,
    title: "Chatbot / AI Assistant",
    description:
      "An AI-powered chatbot assistant designed to combine natural conversation with real application functionality. The assistant can interact with users while performing tasks such as changing the application theme and managing a to-do list. The frontend was built with Next.js and the backend with NestJS, while Groq was used to power fast AI responses. This project helped me explore AI integration, API communication, full-stack architecture, and connecting conversational AI with application actions.",

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
      cloudinary: false
    },
  },

  {
    id: 9,
    title: "Blogging Website",
    description:
      "A full-stack blogging platform built with Next.js, MongoDB, and Cloudinary. Users can create blog posts, submit content, and upload images, while the application handles image storage and delivery through Cloudinary. Published posts are displayed dynamically on the homepage, with individual pages generated through dynamic routing. This project strengthened my understanding of full-stack development, database integration, cloud media storage, API routes, and dynamic content rendering.",

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
      cloudinary: true
    },
  },
];