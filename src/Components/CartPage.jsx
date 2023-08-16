
import { useEffect, useState } from 'react'
import { CartCard } from './CartCard';
import { Stack, HStack, VStack,Box,StackDivider,Flex,Spacer, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import { spf,gmd } from '@fortawesome/fontawesome-free-regular'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import axios from "axios";
import styles from "./CartPage.module.css";
import {useNavigate} from 'react-router-dom';


const postData= [
  {
    "id": 14,
    "title": "Turbo Como 4.0",
    "image": "https://assets.specialized.com/i/specialized/90422-52_COMO-40-REDTNT-SILREFL_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "Como is a laid back e-bike with a clean look and upright rider position for convenient comfort and style. This full-power electric bike was designed for city streets and comes equipped with fenders, lights, and a low step-through frame, making it perfect for daily commutes or riding around town.",
    "category": "Active",
    "price": 11000
  },
  {
    "id": 1,
    "title": "Rockhopper 27.5",
    "image": "https://assets.specialized.com/i/specialized/91522-71_ROCKHOPPER-29-OLVGRN-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "A heart of gold, presented in our lightweight yet durable Premium A1 Aluminum, the Rockhopper’s butted aluminum frame features hydroformed top and downtubes in order to keep weight low and strength high, all while providing increased standover clearance, slick internal cable routing and dropper-post compatibility.",
    "category": "Mountain",
    "price": 7000
  },
  {
    "id": 2,
    "title": "Rockhopper 26",
    "image": "https://assets.specialized.com/i/specialized/91822-76_ROCKHOPPER-29-TARBLK-WHT_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "Bringing our Rx Tune to Rockhopper for the very first time, the lockout-equipped SR Suntour XCM with custom Multi-Circuit damping brings size-specific travel and spring rates to the show in a performance that’s sure to impress while also ensuring consistent geometry, handling and suspension performance, regardless of frame or wheel size.",
    "category": "Mountain",
    "price": 3000
  },
  {
    "id": 3,
    "title": "Allez",
    "image": "https://assets.specialized.com/i/specialized/94622-72_ALLEZ-E5-FLORED-TARBLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "All too often, corners are cut to meet price-points in the entry-level road bike market, but the Allez redefines what it means to be .Focusing on weight, refinement, and reliability like nothing else in its class, the Allez is the first to make these technologies accessible to everyone. Whether you're just getting into road cycling, commuting, or looking for a new bike, the Allez is just as performance-packed as it is versatile.",
    "category": "Road",
    "price": 9000
  },
  {
    "id": 4,
    "title": "Turbo Tero 3.0 Step-Through",
    "image": "https://assets.specialized.com/i/specialized/95122-72_TERO-30-ST-OAKGRNMET-SMK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Looking for a commuter you can take touring? A touring bike that can haul cargo? This is it. In a word, the Tero is unstoppable. Off-road capable wheels and tires, powerful hydraulic disc brakes, and a full-on suspension fork can transform every ride into an adventure, whether you’re on dirt roads or cruising through the concrete jungle.",
    "category": "Active",
    "price": 15000
  },
  {
    "id": 5,
    "title": "Rockhopper Sport 27.5",
    "image": "https://assets.specialized.com/i/specialized/91822-65_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "All barn-burner and no benchwarmer, the Rockhopper Sport throws out the playbook when it comes to putting performance points on the board while playing some serious defense on behalf of your wallet Game-ready with Shimano MT200 hydraulic disc brakes, MicroSHIFT shifting and an SR SunTour XCM fork that’s built to hustle, the Rockhopper Sport can tack up the win on any given Sunday—and the rest of the week too for that matter.",
    "category": "Mountain",
    "price": 5000
  },
  {
    "id": 6,
    "title": "Diverge E5",
    "image": "https://assets.specialized.com/i/specialized/95422-72_DIVERGE-E5-SMK-CLGRY-CHRM_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Whether your goal is to escape on gravel back roads, far from cars and crowds, toe the start line at your first gravel race, or simply get the most versatile bike on the road or dirt, no bike is better than the new Diverge. It's quite simply the fastest, most capable - and just maybe the most fun - alloy bike we've ever made, delivering a ride that's quick and lively, but stable and confidence inspiring when the terrain gets rough. With all-new gravel geometry and category leading tire clearance, the new Diverge represents everything we've learned over more than 40 years of riding road, gravel and dirt. The Diverge writes an entirely new chapter in the gravel bike category, so you can dream up entirely new rides. It's the ultimate getaway vehicle.",
    "category": "Road",
    "price": 5000
  },
  {
    "id": 7,
    "title": "Turbo Levo SL Kids",
    "image": "https://assets.specialized.com/i/specialized/96822-70_LEVO-SL-HT-BLZ-SLT-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "Mindfully designed for young athletes, the new Turbo Levo SL Kids electric bike combines the best of both worlds for enthusiastic guardians and budding riders. Featuring the Specialized 1.2 Motor, virtually unending battery hours, configurable speed and assist limits, the road less traveled is now kid-friendly — the only thing to worry about is whether or not you can keep up.",
    "category": "Kids",
    "price": 7000
  },
  {
    "id": 8,
    "title": "Rockhopper Sport 29",
    "image": "https://assets.specialized.com/i/specialized/91822-64_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "A heart of gold, presented in our lightweight yet durable Premium A1 Aluminum, the Rockhopper’s butted aluminum frame features hydroformed top and downtubes in order to keep weight low and strength high, all while providing increased standover clearance, slick internal cable routing and dropper-post compatibility.",
    "category": "Mountain",
    "price": 8000
  },
  {
    "id": 9,
    "title": "Turbo Como 4.0",
    "image": "https://assets.specialized.com/i/specialized/90422-53_COMO-40-SND-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Como is a laid back e-bike with a clean look and upright rider position for convenient comfort and style. This full-power electric bike was designed for city streets and comes equipped with fenders, lights, and a low step-through frame, making it perfect for daily commutes or riding around town.",
    "category": "Electric",
    "price": 15000
  },
  {
    "id": 10,
    "title": "Diverge Sport Carbon",
    "image": "https://assets.specialized.com/i/specialized/95423-60_DIVERGE-SPORT-CARBON-MORNMST-DOVGRY_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Whether your goal is to escape on gravel back roads, far from cars and crowds, or drop the hammer at the front of your favorite gravel race, no bike does it better than the new Diverge. It's quite simply the fastest, most capable - and just maybe the most fun - bike we've ever made, delivering a ride that's quick and lively under power, but stable and confidence inspiring when the terrain gets rough. From Future Shock 1.5 and all-new gravel geometry, to category leading tire clearance, the new Diverge represents everything we've learned over more than 40 years of riding road, gravel and dirt. The Diverge writes an entirely new chapter in the gravel bike category, so you can dream up entirely new rides. It's the ultimate getaway vehicle",
    "category": "Road",
    "price": 6000
  },
  {
    "id": 11,
    "title": "Haul ST",
    "image": "https://sb.monetate.net/img/1/c/5965/f797d00462814b7531e2f924f26799e430662627/6.13.eJw1jltuwyAQRfcy31TCxAHjrVQVojDEoxKMgD6j7L1jpf2ce8-5mhuETOHtZy_YYX1-ERC_i79/ScLXtFdugI7_dBVCE1ZhFLVZAwxKxueqbvx41-DxgBRAQGvpBH-gOvLznLAC_BpZOe2GilgtDG9JlY2E/6a8lXw_SQqbt_H1ZuMiamnpQRMGhkfFBjr3_hJ8Wx8YyWCz_YB5vB9c0zl4w1UcpZq2WaX835NKFKVs1/JaWMtzieptdLKwP0XjpFO_Q.PKsT32KuT6lHhHySinDAVzq_4SF6T4t7Mvb-yxBhe14.png",
    "description": "Whatever you’re into, get more into it with the Specialized Globe Haul ST. It’s down for the ride. With 419 pounds of cargo capacity (rider included) up to 60 miles at a time, this fully customizable electric bike has the speed, power, range, and stability to get you wherever you need to go with whatever you need. With a grip of mounting opportunities you can bring the kids, a kayak, and stop on the way home for groceries. Don’t sweat it getting dark on you either. Integrated front and rear lights will have you dialed from dawn patrol to golden hour.",
    "category": "Active",
    "price": 12000
  },
  {
    "id": 12,
    "title": "P.4 Frame",
    "image": "https://assets.specialized.com/i/specialized/71923-50_P4-FRM-RSTDRED-WHTSGE_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "This totally redesigned P.Series frame gives riders of all sizes a jumping off point to a life on bikes. The lightweight, but tough alloy frame is designed to take all the hits and keep rolling—across all frame sizes. Our approach to these robust bikes centers around delivering a simple, high-quality platform that's versatile for all riders, and packs in category-first features that make a difference to the rider.",
    "category": "Mountain",
    "price": 4000
  },
  {
    "id": 13,
    "title": "Riprock 20",
    "image": "https://assets.specialized.com/i/specialized/96522-70_RIPROCK-20_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "Freedom is the absence of fear. And riding fearlessly requires a bike that can handle your kid’s imagination. It’s why we designed Riprock to be a mountain bike inclusive of all the features needed for superior ripping, like modern geometry, Ground Control tires, hydraulic disc brakes, and internally routed cables. Finally, we threw in a wider-range drivetrain, making Riprock truly the perfect bike to inspire riders to climb higher and tackle the downhills freely.",
    "category": "Kids",
    "price": 6000
  },
  {
    "id": 14,
    "title": "Turbo Como 4.0",
    "image": "https://assets.specialized.com/i/specialized/90422-52_COMO-40-REDTNT-SILREFL_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "Como is a laid back e-bike with a clean look and upright rider position for convenient comfort and style. This full-power electric bike was designed for city streets and comes equipped with fenders, lights, and a low step-through frame, making it perfect for daily commutes or riding around town.",
    "category": "Active",
    "price": 11000
  },
  {
    "id": 15,
    "title": "Chisel Frameset",
    "image": "https://assets.specialized.com/i/specialized/71722-70_CHISEL-HT-FRM-SMKLQDMET-METWHTSIL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "The all-new Chisel has been purpose-built to tackle modern cross country trails and race courses with the utmost speed. In fact, it shares many of the same modern features as its Epic Hardtail sibling, but in a more budget-friendly package—making it the most efficient and capable alloy hardtail out there.",
    "category": "Mountain",
    "price": 4400
  },
  {
    "id": 16,
    "title": "S-Works Aethos - Dura-Ace Di2",
    "image": "https://assets.specialized.com/i/specialized/97223-00_AETHOS-SW-DI2-BRCH-ABLN-DUNEWHT_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Don’t get us wrong, we’re all for racing. Grand Tour top steps, Classic’s Monuments—they’re in our DNA. But sometimes riding simply to ride, riding for the love of riding, is just what we need. And this is what the Aethos lives for. Sure, it’s given nothing up to performance, and happens to be the lightest frame out there, but with no compromise to style. Aethos: Billions of calculations in the pursuit of one thing—the perfect ride.",
    "category": "Road",
    "price": 10000
  },
  {
    "id": 17,
    "title": "Turbo Levo Alloy",
    "image": "https://assets.specialized.com/i/specialized/95223-70_LEVO-ALLOY-DKMOS-HRVGLD_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "It starts with our Turbo Full Power 2.2 motor and Turbo Connect Unit (TCU), which provide Levo with a smooth and seamless amplification of your efforts—4x you power that lets you choose where to ride, and when you want to do it. Levo also shatters limitations when it comes to range, amplifying your effort for up to five hours of trail time. Now you can ride farther, and explore more, than ever before. And the optimized chassis boasts 150mm of custom-tuned rear suspension and adjustable geometry that delivers a stable and natural ride like no other. Because at the end of the day, it’s the ride that matters. Believe it.",
    "category": "Electric",
    "price": 18000
  },
  {
    "id": 18,
    "title": "Roll 3.0 Low Entry",
    "image": "https://assets.specialized.com/i/specialized/96122-74_ROLL-30-LOW-ENTRY-OIS-FSTGRN-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "With its lightweight alloy low-entry frame that lets you easily put a foot down when needed, eight speeds of go fast MicroSHIFT gearing, stable and wide 650b tires, powerful hydraulic disc brakes, and low-entry design that makes it a easier to get on and off the bike, the Roll does everything in its power to encourage and motivate you to keep fit and get around in comfortable, efficient style.",
    "category": "Active",
    "price": 12000
  },
  {
    "id": 19,
    "title": "Diverge E5 EVO Frameset",
    "image": "https://assets.specialized.com/i/specialized/75422-70_DIVERGE-E5-EVO-FRMSET-BRSH-SMKLQDMET-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "This thing called 'gravel riding' is still evolving, still being defined. What's next? Hop on the new Diverge Expert EVO and you tell us. It's designed to get aggressive, to push the boundaries of what we thought was possible on a gravel bike. With flat bars and geometry even more progressive then the new drop bar Diverge you better hang onto your flannel. We've significantly increased the reach, slackened the head tube and lowered the bottom bracket, to put you 'in' the bike for a super planted feeling. From sending technical single track to ripping flowing fire road descents, if you're looking for a partner to take your gravel riding to new levels, nothing's faster, more fun, or rowdier than the Diverge EVO.",
    "category": "Road",
    "price": 3900
  },
  {
    "id": 20,
    "title": "Jett 24",
    "image": "https://assets.specialized.com/i/specialized/92722-72_JETT-24_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Kids move fast, and grow faster. At times, it can seem like there’s a small window for the perfect bike fit. The right bike for a young rider is a delicate balance between too small, too big, and a short-lived just right. If we’re going to inspire the next generation of riders, we need to keep kids comfortably riding longer.",
    "category": "Kids",
    "price": 10000
  },
  {
    "id": 21,
    "title": "Hotwalk Carbon",
    "image": "https://assets.specialized.com/i/specialized/94021-00_HOTWALK-CARBON_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "We pored over every detail in order to achieve a ride quality that’s unprecedented in such a small size. We’re talking precision at every touchpoint—from 38% smaller diameter handlebar grips to a solid carbon layup. All aligned to create the ultimate first ride.",
    "category": "Kids",
    "price": 8000
  },
  {
    "id": 22,
    "title": "S-Works Tarmac SL8 - SRAM Red eTap AXS",
    "image": "https://assets.specialized.com/i/specialized/94924-03_TARMAC-SL8-SW-ETAP-REDSKY-FRYRED-WHT_FDSQ?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "Aerodynamics or lightweight alone don’t win races - speed is what matters. Delivering that speed requires creating an uncompromising combination of aerodynamics, lightweight, stiffness, and compliance. Through race simulations using real world data our Ride Science team knows the Tarmac SL8 is the fastest race bike ever made on the routes that matter - 16.6 seconds faster over 40km, 128 seconds faster over Milan San Remo, 20 seconds faster over the legendary Tourmalet climb.",
    "category": "Road",
    "price": 11000
  },
  {
    "id": 23,
    "title": "Turbo Vado SL 5.0 EQ",
    "image": "https://assets.specialized.com/i/specialized/93922-30_VADO-SL-50-EQ-BRSYYEL-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Meet the Vado SL. This super-light e-bike was designed to take on anything from daily commutes through urban landscapes to clocking even faster workouts. Need to carry your bike? No sweat. Weighing 40% less than the full-power Vado, there’s no other electric bike out there with ride quality, range, and power like this. All you need to do is get on and go.",
    "category": "Active",
    "price": 9800
  },
  {
    "id": 24,
    "title": "Turbo Kenevo SL Expert",
    "image": "https://assets.specialized.com/i/specialized/98021-36_KENEVO-SL-EXPERT-CARBON-29-BRSYYEL-BLK_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Power up to trail riding’s next level and dominate any and all trail monsters—the Turbo Kenevo Super Light melds the legendary handling and all-around big trail prowess of the Enduro with our Super Light electric support to deliver indomitable capability, light weight, and power to conquer more and bigger trails.",
    "category": "Electric",
    "price": 19000
  },
  {
    "id": 25,
    "title": "Turbo Vado SL 4.0 Step-Through",
    "image": "https://assets.specialized.com/i/specialized/93921-51_VADO-SL-40-ST-CSTUMBR-SILREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Meet the Vado SL. This super-light e-bike was designed to take on anything from daily commutes through urban landscapes to clocking even faster workouts. Need to carry your bike? No sweat. Weighing 40% less than the full-power Vado, there’s no other electric bike out there with ride quality, range, and power like this. All you need to do is get on and go.",
    "category": "Active",
    "price": 10500
  },
  {
    "id": 26,
    "title": "Turbo Vado SL 5.0",
    "image": "https://assets.specialized.com/i/specialized/93922-31_VADO-SL-50-BRSH-BLKREFL_HERO_1?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "The Vado SL comes equipped with everything you need to start riding right away. First, the extra-bright, built-in lights give you higher visibility in low-light areas. Next, the MasterMind Turbo Control Unit (TCU) makes it easy to view ride info on the go. The Pathfinder tires roll fast on or off the pavement with plenty of grip, and the Vado SL's featherweight status also makes it perfect for city commuting and offers far more than ride quality — it means you can hang it on a wall or car rack. And it makes public transportation a breeze.",
    "category": "Electric",
    "price": 16500
  },
  {
    "id": 27,
    "title": "Riprock Coaster 16",
    "image": "https://assets.specialized.com/i/specialized/96518-71_RIP_CSTR-16_CNDYRED-BLK-WHT_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "With our Riprock Coaster 16, riding gets boiled down to its simplest element—fun. And to make sure of it, we designed the bike with tons of cool features that are easy for your little ones to use, like a coaster brake for simple stopping, wide 16x2.3 tires that increase stability and confidence, and tough components that will stand up to years of abuse. It's the perfect bike for your little ripper to start getting out on the trail with—we just wish that we had one when we were kids.",
    "category": "Kids",
    "price": 3000
  },
  {
    "id": 28,
    "title": "Turbo Como 5.0 IGH",
    "image": "https://assets.specialized.com/i/specialized/90422-20_COMO-50-IGH-CSTBLK-SILREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Como is a laid back e-bike with a clean look and upright rider position for convenient comfort and style. This full-power electric bike was designed for city streets and comes equipped with fenders, lights, and a low step-through frame, making it perfect for daily commutes or riding around town.",
    "category": "Electric",
    "price": 8000
  },
  {
    "id": 29,
    "title": "Turbo Levo Pro",
    "image": "https://assets.specialized.com/i/specialized/95221-10_LEVO-PRO-CARBON-REDWD-SMK-BLK_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto",
    "description": "It starts with our Turbo Full Power 2.2 motor and MasterMind Turbo Control Unit (TCU), which provide Levo with a smooth and seamless amplification of your efforts—4x you power that lets you choose where to ride, and when you want to do it. Levo also shatters limitations when it comes to range, amplifying your effort for up to five hours of trail time. Now you can ride farther, and explore more, than ever before. And the optimized chassis boasts 150mm of custom-tuned rear suspension and adjustable geometry that delivers a stable and natural ride like no other. Because at the end of the day, it’s the ride that matters. Believe it.",
    "category": "Electric",
    "price": 15000
  },
  {
    "id": 30,
    "title": "Hotwalk",
    "image": "https://assets.specialized.com/i/specialized/94019-00_HTRK_HOTWALK-19_ACDKWI-WHT_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
    "description": "Starting early is the key to teaching your young ones the joys of bicycle life, and there's no better way to do so than with our Hotwalk. It's for kids 18 months to 4 years old*, and it's designed for less crashes and more smiles to make learning to ride a bike as easy as can be.",
    "category": "Kids",
    "price": 4000
  }
]




export const CartPage=()=>{
    const navigate=useNavigate();
    const[total,setTotal]=useState(0);
    const[data,setData]=useState([]);
    const[isLoaded,setIsLoaded]=useState(false);


    async function getData(){
      setTotal(0);
      try {
        setIsLoaded(true);
        const res=await axios.get("https://cycleshopdata.onrender.com/cart");
          setIsLoaded(false);
        setData(res.data);
        
        console.log(res)
        let pr=0;
     res.data.map((e)=>{
        pr+=e.price;
     })

     setTotal(pr);
      } catch (error) {
        setIsLoaded(false);
        console.log(error)
      }
    }
    useEffect(()=>{
    
    /* postData.map((d)=>{
       axios.post("https://cycleshopdata.onrender.com/cart",{...d})
       .then((res)=>{
        console.log(res)
       }).catch((err)=>{
        console.log(err)
       })
     })*/

      getData();
     
    },[])
function handleNavigate(){
  navigate("/payment");
}


    if(isLoaded){
      return(
        <div className={styles.loader}>
        
        <h1 className={styles.headding}>Your Orders</h1>
        <Stack w={{ base: '95%', lg: '70%' }} margin="auto">
        <Skeleton  height="8rem" marginBottom="3rem" borderRadius="10px" />
        <Skeleton  height="8rem"  marginBottom="3rem" borderRadius="10px"/>
        <Skeleton  height="8rem"  marginBottom="3rem" borderRadius="10px"/>
        <Skeleton  height="8rem"  marginBottom="3rem" borderRadius="10px"/>
        <Skeleton  height="8rem"  marginBottom="3rem" borderRadius="10px"/>
        <Skeleton  height="8rem"  marginBottom="3rem" borderRadius="10px"/>
        <Skeleton  height="8rem"  marginBottom="3rem" borderRadius="10px"/>


        </Stack>
        
    </div>
      );
    }


    return(
     
      
        <div style={{backgroundColor:"#262626",minHeight:"59rem" ,paddingTop:"3em"}}>
        
        <h1 className={styles.headding}>Your Orders</h1>
       
        <VStack
  m="auto"
  spacing={4}
  align='stretch'
  w={{ base: '95%', lg: '70%' }}
  
>
 {
        data.map((e)=>(
         
          <CartCard key={e.id} e={e} getData={getData} total={total} setTotal={setTotal}/> 
          
        ))
 }
  
</VStack>

<div className={styles.footparent}>
  
<div  minHeight="9rem" className={styles.flexboxe}  >
<div className={styles.box1}>
  <div className={styles.footchild1}>
    <div >
      <h1><FontAwesomeIcon icon="fa-solid fa-truck" size="2xl" style={{color: "#000000",}} /></h1>
      <br />
      <h1>FSAT DELIVERY</h1>
      <br />
        <p >We will deliver youe order in 48 hours</p>
    </div>
    <div>
      <h1 style={{display:"flex",justifyContent:"space-around"}}><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" ><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg></h1>
      <br />
      <h1 >IMPACCABLE SERVICE</h1>
      <br />
      <p >We will help you to assemble bike after delivery</p>
    </div>
    <div >
      <h1><FontAwesomeIcon icon="fa-solid fa-credit-card" rotation={180} size="2xl" style={{color: "#000000"}} /></h1>
      <br />
      <h1 >SECURE PAYMENT</h1>
      <br />
        <p >We use 3d secure to protect payments</p>
    </div>
  </div>
</div>
<Spacer/>
<div className={styles.box2}>
  <div>
    <div style={{fontSize:"2rem" ,fontWeight:"700"}}>
      <h1 style={{display:"flex",justifyContent:"space-between"}}>Total:  <h1 style={{textDecoration:"line-through",opacity:"0.5",textAlign:"end"}}>€ {total}</h1></h1>
      <p style={{fontSize:"1rem" ,textAlign:"start",display:"flex",justifyContent:"space-between"}}>Discount:  <p style={{}}>10%</p></p>
      <h1 style={{display:"flex",justifyContent:"space-between"}} ><h1 style={{width:"max-content"}}>Total:</h1> € {total-(total/20)}</h1>
      <Button  width="60%" height="3.5rem" bg="red" fontSize="1.5rem" color="white" onClick={handleNavigate} >Checkout</Button>
       </div>
  </div>
</div>
</div>
</div>
        </div>
       
    );
}