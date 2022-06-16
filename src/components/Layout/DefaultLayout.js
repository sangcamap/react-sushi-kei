import React from 'react'
import NavigationBar from '../NavigationBar'
import Footer from '../Footer'

export default function DefaultLayout({children}) {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="content">{children}</div>
      <Footer></Footer>
    </>
  );
}
