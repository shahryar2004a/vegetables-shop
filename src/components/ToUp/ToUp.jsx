import React from 'react'



import './ToUp.css'
export default function ToUp() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
  return (
    <>
       <div onClick={scrollToTop}  className="toUp cursor-pointer absolute top-[-40px] left-[50%]"><div  className="text-center">
    <div  className="toUp-icon">
         
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
          </svg>
        </div>
    </div> 
    

  </div>
    </>
  )
}
