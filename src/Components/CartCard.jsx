import { useEffect, useState } from "react"
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack,Box,StackDivider,Flex,Spacer,Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid' 
import styles from './CartCard.module.css'
import axios from "axios"
<Button colorScheme='blue'>Button</Button>

export const CartCard=({e,getData,total,setTotal})=>{

const[price,setPrice]=useState(e.price);
const[count,setCount]=useState(1);
const[delColor,setDelColor]=useState(true)


async function handleDelete(el){
    console.log(el.currentTarget.id)

    try {
      const res=await axios.delete(`https://cycleshopdata.onrender.com/cart/${el.currentTarget.id}`);
      getData();
    } catch (error) {
      console.log(error)
    }
}





  return(

<>
   <div className={styles.box}>
   <Box h='8em' borderRadius="10px" bg="RGBA(240, 240, 240, 1)" margin="0" padding="1rem" display="flex" justifyContent="space-between" >
                
                <Box    height="100%" maxWidth="max-content" display="flex" >
               
                    <Box  border="solid" borderWidth="medium" borderColor="rgba(0,0,0,0.1)" borderRadius="2px" bg='white' height="100%" maxWidth="max-content" >
                        <Image src={e.image} alt='Dan Abramov' height="100%"  />
                    </Box>
                               
                               <Box marginLeft="1.5rem" textAlign="none">
                                <h3 style={{fontWeight:700,textAlign: "left"}}>{e.title}</h3>
                                <p  style={{opacity:"0.3",textAlign: "left"}}><FontAwesomeIcon icon="free-solid fa-file" style={{color: "#000000",opacity:"0.3"}} /> 462587</p> 
                                <p style={{fontWeight:700,textAlign:"left" ,marginTop:"15%"}}>{"€"} {e.price}</p> 
                               </Box>
                      
               </Box>
            
               <div style={{width:"max-content" ,display:"flex" ,alignItems:"center"}}>
            
                <div style={{display:"flex" ,alignItems:"cener" ,alignContent:"center"}}>
                <Button colorScheme='black' variant='ghost' fontSize="30px" disabled={count==1} onClick={()=>(setCount(count=>(count!=1?count-1:1)), setTotal(count!=1?total-e.price:total),setPrice(price=>(price!=e.price?price-e.price:price)))}>
                -
              </Button>
              <Button colorScheme='black' variant='outline' fontSize="15px" >
               {count}
              </Button>
              
                   
                   <Button colorScheme='black' variant='ghost' fontSize="30px" onClick={()=>(setCount(count+1), setTotal(total+e.price),setPrice(price+e.price))}>
                +
              </Button>
                </div>
                <div style={{display:"flex",marginTop:"1rem"}} >
                <p style={{fontWeight:700, height:"min-content" ,padding:"1rem" ,minWidth:"10rem"}} >{"€"} {price}</p>
                <Box id={e.id} height="max-content" width="max-content"  onMouseOver={()=>setDelColor(false)} onMouseOut={()=>setDelColor(true)}>
                
                <button  id={e.id}  onClick={handleDelete} style={{height:"max-content" ,padding:"1rem"}}><FontAwesomeIcon icon="fa-solid fa-trash" style={{color:delColor? "#000000":"red",  }} /></button>
                </Box>
                </div>
               </div>
              
            </Box>
   </div>


   <div>




   </div>
      <div className={styles.resbox}>
          <Box width="max-content" height="max-content" margin="auto">
            <Image src={e.image} maxWidth="10rem"/>
          </Box>
          <br />
        <h3 style={{fontWeight:"700",fontSize:"100%"}}>{e.title}</h3>
        <br />
        <div style={{display:"flex" ,alignItems:"cener" ,alignContent:"center" ,width:"max-content",margin:"auto"}}>
                <Button colorScheme='black' variant='ghost' fontSize="30px" disabled={count==1} onClick={()=>(setCount(count=>(count!=1?count-1:1)), setTotal(count!=1?total-e.price:total),setPrice(price=>(price!=e.price?price-e.price:price)))}>
                -
              </Button>
              <Button colorScheme='black' variant='outline' fontSize="15px" >
               {count}
              </Button>
              
                   
                   <Button colorScheme='black' variant='ghost' fontSize="30px"  onClick={()=>(setCount(count+1), setTotal(total+e.price))}>
                +
              </Button>

              
              
                </div>
                <p style={{fontWeight:500, height:"min-content" ,padding:"1rem" ,minWidth:"7rem"}} >{"Price:  €"} {price}</p>
                <Box id={e.id} height="max-content" width="min-content"  onMouseOver={()=>setDelColor(false)} onMouseOut={()=>setDelColor(true)} margin="auto">
                <button  id={e.id}  onClick={handleDelete} style={{height:"max-content" ,padding:"1rem"}}><FontAwesomeIcon icon="fa-solid fa-trash" style={{color:delColor? "#000000":"red",  }} /></button>
                </Box>


      </div>



</>

  );
}