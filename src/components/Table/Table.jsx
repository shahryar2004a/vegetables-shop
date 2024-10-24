import React,{useState,useEffect} from 'react'



import './Table.css'
export default function Table({items,onRemove}) {

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      };



  return (
    <>
      <section className='container my-20'>
      <div className="container mx-auto mt-8 p-4">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-[#82ae46]">
          <tr>
            <th className="border text-white border-gray-300 px-4 py-2">عکس محصول</th>
            <th className="border text-white border-gray-300 px-4 py-2">محصول</th>
            <th className="border text-white border-gray-300 px-4 py-2">قیمت (تومان)</th>
            <th className="border text-white border-gray-300 px-4 py-2">تعداد</th>
            <th className="border text-white border-gray-300 px-4 py-2">جمع</th>
            <th className="border text-white border-gray-300 px-4 py-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">هیچ محصولی وجود ندارد</td>
            </tr>
          ) : (
            items.map(item => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  <img src={item.img} alt={item.name} className="w-40 h-40 object-cover" />
                </td>
                <td className="border text-center border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border text-center border-gray-300 px-4 py-2">{item.price}</td>
                <td className="border text-center border-gray-300 px-4 py-2">{item.quantity}</td>
                <td className="border text-center border-gray-300 px-4 py-2">{item.quantity*item.price}</td>
                <td className="border text-center border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {items.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl text-white">جمع کل: {calculateTotal()} تومان</h3>
        </div>
      )}
    </div>
    </section>

    </>
  )
}
