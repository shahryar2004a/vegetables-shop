import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
export default function Header({title}) {
  return (
    <>
        <section>
        <div class="w-full back">
        <div class="header-pic">
            <Link to='/' className='text-white font-YekanMedium text-xl' href="index.html">خانه</Link>
            <h1 className='text-white font-YekanHeavy text-4xl mt-4'>{title}</h1>
        </div>
        </div>
    </section>
    </>
  )
}
