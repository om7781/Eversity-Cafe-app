"use client"
import "./globals.css";
import React, { useRef, useState } from 'react'
import Navbar from '@/Components/Navbar'
import Main from '@/Components/Main'
import Link from 'next/link'
import Landingpage from '@/Components/Landingpage'
import Footer from "@/Components/Footer";



const page = () => {
  return (
    <>
    
    <div><Landingpage /></div>
      
    <div><Main/></div>


    </>
  )
}

export default page