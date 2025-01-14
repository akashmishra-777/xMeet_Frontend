import {Link} from 'react-router-dom'
export default function ForgetPassword(){

    document.title = "Login | xMeet"

    return<>
    <div className="bg-blue-700 h-screen grid  md:grid-cols-1 lg:grid-cols-2">
        
        <div className="bg-[#F7F9FA] col-span-1  justify-center items-center hidden lg:flex ">
            <img src="/loginImg.png " className="scale-[.7]" alt="Image Not found" />
        </div>

        <div className=" bg-[white]  col-span-1 flex justify-center items-center flex-col">

            <h2 className="text-[2.5rem] mt-3 text-[#131619] font-semibold select-none">Forget Password</h2>


           

            <div className="gap-5 my-1 flex justify-center items-center flex-col md:w-[100%] lg:w-[60%] p-6">

            <p className="text-center">Do not worry. Resetting your password is easy, just tell us the email address you registered with xMeet.</p>

           

            <input type="text" placeholder="Email Address" className="input shadow-md  w-[100%] bg-white input-bordered  outline-[#eee] border outline  border-[#ddd] text-black" />

            
          

           
            
           

           <button className="p-3 rounded-[8px] border-2 border-[black] shadow-lg hover:bg-blue-700 w-[100%] text-white bg-[#1E71D5]">Forget Password</button>


           <p className="select-none text-center">By signing in, I agree to the xMeet Pravicy Statement and Terms of service.</p>


           <div className='flex'>
           <span className='text-black'>Don&apos;t want to change your password?</span>
           <Link to="/sign-in" className='text-[#1E71D5] font-semibold'>&nbsp;Sign In </Link>
           </div>

          



            </div>

        </div>


    </div>
    </>
}