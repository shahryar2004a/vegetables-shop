import React from 'react'

import './Category.css'
export default function Category() {
  return (
    <>
      <section className="category dark:bg-zinc-700">
<div className="container ">
 
 <div className="grid md:grid-cols-3 gap-4 ">
  <div className="">
    <div className="category-item fruit-land ">
      <div className="category-item-text">
        <h2 className="font-YekanMedium"><a href="#">سرزمین میوه</a></h2>
      </div>  
    </div>
    <div className="category-item strawberry mt-4 "  >
      <div className="category-item-text">
          <h2 className="font-YekanMedium"><a href="#">توت فرنگی</a></h2>
      </div>
  </div>
  </div>
       <div>

      <div className="vegetables">
        
        <div className="text-center">
          <h2 className='font-YekanHeavy text-4xl pt-4'>سبزیجات</h2>
          <p className='font-YekanMedium text-xl'>حفاظت از سلامت هر خانه</p>
          <p><a href="#" className="bg-[#82ae46] rounded px-3 py-1 text-white font-YekanMedium
           hover:bg-transparent hover:text-[#82ae46] transition-all border border-[#82ae46]">خرید آنی</a></p>
      </div>
      </div>
  </div>
  <div>
    <div className="category-item natural-juices ">
      <div className="category-item-text">
          <h2 className="font-YekanMedium "><a href="#">آبمیوه های طبیعی</a></h2>
      </div>
  </div>
  <div className="category-item dry-fruit mt-4">
 <div className="category-item-text">
     <h2 className="font-YekanMedium"><a href="#">میوه خشک</a></h2>
 </div>
</div>
  </div>
  
 </div>
</div>
</section>
    </>
  )
}
