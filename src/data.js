
import Images from "./components/Images/Images";

const slides = [
    {
      id:1,
      image: Images.bg1,
      title: 'تهیه میوه و سبزیجات تازه',
      description: 'تهیه سبزیجات و میوه های ارگانیک',
    },
    {
      id:2,
      image:Images.bg2,
      title: 'میوه های 100 درصد تازه و ارگانیک',
      description: 'تهیه سبزیجات و میوه های ارگانیک',
    },

  ];

 const services=[
    {
      id:1,
      name:'free-send',
      icon:'flaticon-shipped',
      title:'ارسال رایگان',
      des:'برای سفارش های بالای 100 هزارتومان',
    },
    {
      id:2,
      name:'product-fresh',
      icon:'flaticon-diet',
      title:'تازگی محصولات',
      des:'برای سفارش های بالای 100 هزارتومان',
    },
    {
      id:3,
      name:'best-quality',
      icon:'flaticon-award',
      title:'کیفیت برتر',
      des:'محصولات با کیفیت',
    },
    {
    id:4,
    name:'support',
    icon:'flaticon-customer-service',
    title:'پشتیبانی',
    des:'پشتیبانی 24 ساعته',
  }
 ]

  export  {slides,services}