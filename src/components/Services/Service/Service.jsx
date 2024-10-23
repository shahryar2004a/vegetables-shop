import React from 'react'

import './Service.css'
export default function Service({data}) {
  return (
    <>
       <div className={` service-item ${data.name}`}>
                <div className="out-circle cursor-pointer">
                  <div className="in-circle ">

                      <span className={`${data.icon} service-icon`}></span>

                  </div>
                </div>
                <div className="media-body dark:text-white">
                  <h3 className="heading font-YekanHeavy">{data.title}</h3>
                  <span className='font-YekanMedium text-[15px]'>{data.des}</span>
              </div>
              </div>
    </>
  )
}
