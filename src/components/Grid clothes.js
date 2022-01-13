const Grid    = () => {
    return ( 
<div class=" flex items-center  ">
  <div class="flex-1 max-w-4xl mx-auto p-10">
    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
      <li class="bg-white rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out    "><div class="h-64 w-64 "> <img className="    "  src=" ./images/Hoodie.png " alt=""/>              </div></li>
      <li class="bg-white rounded-lg shadow-xl  transform hover:scale-110 transition-transform duration-500 ease-in-out   "><div class="h-64 w-64 flex justify-center items-center  "> <img className="w-52 mt-2 "  src="./images/t-shert.png " alt=""/>   </div></li>
      <li class="bg-white rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out l"><div class="h-64 w-64 flex justify-center items-center "> <img className="w-56  mt-2  "  src="./images/shorts.png " alt=""/></div></li>
      <li class="bg-white rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out l"><div class="h-64 w-64 "> <img className="    "  src=" ./images/Hoodie.png " alt=""/>              </div></li>
      <li class="bg-white rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out    "><div class="h-64 w-64 flex justify-center items-center  "> <img className="w-52 mt-2 "  src="./images/t-shert.png " alt=""/>   </div></li>
      <li class="bg-white rounded-lg shadow-xl transform hover:scale-110 transition-transform duration-500 ease-in-out "><div class="h-64 w-64 flex justify-center items-center "> <img className="w-56  mt-2  "  src="./images/shorts.png " alt=""/></div></li>
    
    </ul>
  </div>
</div>

     );
}
 
export default Grid  ;