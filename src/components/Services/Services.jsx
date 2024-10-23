import React,{useState} from 'react'
import Service from './Service/Service'
import { services } from '../../data'


import './Services.css'
export default function Services() {
    
    const [servicesData,setServicesData]=useState(services)
  return (
    <>
     <section className="service mt-20">
          <div className="container">
            <div className="flex justify-around flex-wrap">

          {
            servicesData.map((service)=>(
              <Service key={service.id} data={service}/>
            ))
          }             
             
       

            </div>
          </div>
</section>
    </>
  )
}
