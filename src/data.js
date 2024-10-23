
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

 const products=[
      {
        id:1,
        off:'30',
        img:Images.p1,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:2,
        off:'30',
        img:Images.p2,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:3,
        off:'30',
        img:Images.p3,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:4,
        off:'30',
        img:Images.p4,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:5,
        off:'30',
        img:Images.p5,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:6,
        off:'30',
        img:Images.p6,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:7,
        off:'30',
        img:Images.p7,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
      {
        id:8,
        off:'30',
        img:Images.p8,
        title:'فلفل دولمه ای',
        price:'120.00',
      },
 ]

 const customers=[
   {
    id:1,
    name:'علی رضایی',
    img:Images.user1,
    position:'آنالیز سیستم',
    message:'تغییر مسیر زندگی',
   },
   {
    id:2,
    name:'محمد معدلی',
    img:Images.user2,
    position:'بسته بندی مناسب',
    message:'بسیار تمیز و منصفانه',
   },
   {
    id:3,
    name:'رضا دل آرام',
    img:Images.user3,
    position:'طراحی کلی',
    message:'کیفیت منحصر به فرد',
   },
   {
    id:4,
    name:'آرین میرزایی',
    img:Images.user1,
    position:'طراحی',
    message:'سلامتی حق شماست',
   },
   {
    id:5,
    name:'محمد نجات پور',
    img:Images.user2,
    position:'توسعه دهنده وب',
    message:'کیفیت اتفاقی نیست',
   },
   {
    id:6,
    name:'علی رضایی',
    img:Images.user3,
    position:'آنالیز سیستم',
    message:'تغییر مسیر زندگی',
   },
 ]
  export  {slides,services,products,customers}