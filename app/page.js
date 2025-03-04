"use client"
import "./globals.css";
import React, { useRef, useState } from 'react'
import Navbar from '@/Components/Navbar'
import Main from '@/Components/Main'
import Link from 'next/link'
import Landingpage from '@/Components/Landingpage'



const page = () => {
  return (
    <>
    <div><Navbar/></div>
    
    <div><Landingpage /></div>
      
    <div><Main/></div>
    </>
  )
}

export default page