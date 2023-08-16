import './PaymentPage.css';
import { useToast,Button } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { initiatePayment } from './razorpay';
import { useNavigate } from 'react-router-dom';
//import Razorpay from 'razorpay';
const PaymentPage = () => {
  const navigate=useNavigate();
  const[state,setState]=useState(false);
  const[rpay,setRpay]=useState(false);
  const ref1=useRef();
  const toast = useToast()
function handlePay(e){
  if(e.target.checked){
    setState(true);
  }
  setRpay(false);
}


function handlePay2(e){
  if(e.target.checked){
    setState(false);
  }
  setRpay(true);
}


function pay(){
    if(ref1.current.value!=""){
      setTimeout(()=>{
        navigate("/");
      },2911)
    }else{
      alert("please fill all the details")
    }

}



const handlePayment = () => {
  /*const options = {
      key: 'QT3gsIhmAhc5MDJ5eXl1ySgr',
      amount: 1000, // Amount in paise (Example: 1000 paise = Rs 10)
      currency: 'INR',
      name: 'Test Payment',
      description: 'Test payment using Razorpay',
      handler: response => {
          // This function will be called after successful payment
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9876543210',
      },
      notes: {
          address: '123, Test Street',
      },
      theme: {
          color: '#F37254',
      },
  };

  const rzp = new Razorpay(options);
  rzp.open();*/
};



  return (
    <>
    <div className='parent'>
    <h1 className='headding'>Proceed To Checkout</h1>
      <div className='cparent'>
      <div className='child'>
         <label htmlFor="">Name</label>
         <input ref={ref1} type="text"  placeholder='Name'/>
         <label htmlFor="">Enter State</label>
         <select id="indianStates">
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
         </select>
          <label htmlFor="">Enter Street</label>
          <input type="text" placeholder='Enter Street' />
          <label htmlFor="">Enter Landmark</label>
          <input type="text" placeholder='Enter Landmark' />
          <label htmlFor=""> Address</label>
            
          <textarea name="" id="" cols="60" rows="5">Enter Full Address</textarea>
         


      </div>

      <div className='child1'>
        <h1 className='headding2'>Payment Methods</h1>
        <div>
          <label htmlFor="">Razor Pay</label>
          
        <input type='radio' name='pay' onChange={handlePay2}/>
        <label htmlFor="">Card Payment</label>
        <input type='radio' name='pay' onChange={handlePay}/>
        {
          state?(<div>
            <input type="number" placeholder='Card Number' />
            <input type="number" placeholder='C V V' />
            <input type="month" placeholder='Expiry' />
          </div>):""
        }
          
        </div>
        <Button
        width= "100%"
        bordeRadius= "10px"
        backgroundColor= "#EB001B"
        padding= "1.5rem"
        fontSize= "larger"
        margin= "auto"
        marginTop= "2rem"
      onClick={() =>(
        ref1.current.value!=""?(
          toast({
            title: 'Payment Successful',
            description: "We will be redirecting to Home Page",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        ):"",
        pay(),
        handlePayment(),
        rpay?initiatePayment():""
        
      
        )
      }
    >
      Pay Now
    </Button>
      </div>
     
      </div>
     
    </div>
    </>
  )
}

export default PaymentPage
