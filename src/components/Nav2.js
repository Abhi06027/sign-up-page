import React, {} from 'react'


const Nav2 = () => {
   return (
        
        <header>
        
        {/* <div className=" absolute  text-white  flex justify-around text-xl   w-full mt-5   " > */}
        <div className=" absolute  text-white  flex   justify-around  text-xl   w-full mt-5   " >
         <div className='' >
         <div className="  font-bold text-4xl   ">
         
        
         <div className="  cursor-pointer  "   >   MusicX    </div> 
          </div>
        </div>

         <ul className="  items-center cursor-pointer text-lg flex  space-x-6   "   >
          <li className=" hover:text-red-600  "   >  Home    </li>  
          <li className=" hover:text-red-600  "   > About      </li>  
          <li className=" hover:text-red-600  "   >   Tracks    </li>  
          <li className=" hover:text-red-600 "   >  Blog  </li>  
          <li className=" hover:text-red-600 "   > Pages    </li>  
          <li className=" hover:text-red-600  "   >  Contact    </li>  
         </ul>  

          

          <div className='flex items-center  space-x-6 ' >
         <div className=" " >
         </div>
        
        
        <div className="    "   >
        <div className=" flex justify-center items-center hover:text-red-600   border border-gray-300  h-8 w-8  rounded-full   "    >
         
        <img className="h-3 w-3 cursor-pointer      "  src=" ./images/facebook.png " alt=""/>

   </div>
   </div> 
   <div className=" flex justify-center items-center    "   >
        <div className=" flex justify-center items-center cursor-pointer  hover:text-red-600    border border-gray-300   lg:h-8 lg:w-8 h-12 w-12  rounded-full   "    >
         
        <img className="h-3 w-3     "  src=" ./images/twitter.gif " alt=""/>

                
           
           
   </div>
 </div> 
 <div  >
        <div className=" flex justify-center items-center cursor-pointer    border border-gray-300   lg:h-8 lg:w-8 h-12 w-12  rounded-full   "    >
         
        <img className="h-3 w-3   "  src=" ./images/insta.png" alt=""/>

                
           
           
   </div>
 </div> 




   <div className="  lg:hidden     "   >
        <div className=" flex justify-center items-center cursor-pointer hover:text-red-600 lg:h-8 lg:w-8 h-20 w-12   "    >
         
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>

   </div>
   
  
   </div> 
   
   </div>
   
  </div> 
 
<div className=' absolute text-9xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  ' >
Avicii
</div>



<div className=' absolute  text-white   left-2/4 top-full transform -translate-x-1/2  ' > 
<div className=' flex   gap-20 items-center '  >
<img className=" w-64  "  src=" ./images/guitar.jpg " alt=""/>
<div className=' '  >
<div className='  text-4xl  '  >   Wake Me Up </div>
<div className='  text-xl pt-1  '  >  10 December, 2021   </div>
<div className='  text-xl pt-2  '  >  00:00 00:02   </div>

</div>
<div className=' flex gap-40'  >
<div className='   text-xl text-red-600 border border-red-600 py-2 px-6 hover:bg-red-600 hover:text-white  '  >Buy Album</div>
</div>
</div>






</div>





<div>
  
  
  
  <img className="   "  src="./images/music.jpg" alt=""/>    
      
  </div>

    
    
    
<div className=' h-80 w-2/4  bg-red-700  text-white  lg:hidden font-bold hidden    ' >
<ul className=" text-lg flex flex-col   "   >
 <li className="  hover:bg-white hover:text-red-700 py-2 px-10 "   >  Home    </li>  
 <li className=" hover:bg-white hover:text-red-700 py-2 px-10 "   > Category      </li>  
 <li className=" hover:bg-white  hover:text-red-700 py-2 px-10 "   >   Latest      </li>  
 <li className=" hover:bg-white hover:text-red-700  py-2 px-10 "   >  Blog    </li>  
 <li className=" hover:bg-white hover:text-red-700 py-2 px-10  "   >  Pages    </li>  
 <li className=" hover:bg-white hover:text-red-700 py-2 px-10 "   >  Contact    </li>  
</ul>  



</div>  
          </header>

        
    )
}












export default Nav2






