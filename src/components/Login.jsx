import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Login(){

    document.title = "Login | xMeet"

    return<>
    <div className="bg-blue-700 h-screen grid  md:grid-cols-1 lg:grid-cols-2">
        
        <div className="bg-[#F7F9FA] col-span-1  justify-center items-center hidden lg:flex ">
            <img src="public/loginImg.png " className="scale-[.7]" alt="Image Not found" />
        </div>

        <div className=" bg-[white]  col-span-1 flex justify-center items-center flex-col">

            <h2 className="text-[2.5rem] mt-3 text-[#131619] font-semibold select-none">Sign In</h2>

            <div className="gap-5 my-1 flex justify-center items-center flex-col md:w-[100%] lg:w-[60%] p-6">

           

            <input type="text" placeholder="Email Address" className="input shadow-md  w-[100%] bg-white input-bordered  outline-[#eee] border outline  border-[#ddd] text-black" />

            
          

            <input type="password" placeholder="Password" className="input input-bordered w-full outline outline-[#eee] text-black shadow-md border border-[#ddd] bg-white " />
            
            <div className="flex w-[97%] justify-between ">
                <Link to="/forget-password" className="text-[#1E71D5] font-semibold">Forget Password</Link>
                <a className="text-[#1E71D5] font-semibold" href="">Help</a>

               

            </div>

           <button className="p-3 rounded-[8px] border-2 border-[black] shadow-lg hover:bg-blue-700 w-[100%] text-white bg-[#1E71D5]">Sign In</button>


           <p className="select-none text-center">By signing in, I agree to the xMeet Pravicy Statement and Terms of service.</p>



           <div className="w-[100%] p-0 m-0">

            <p className="bg-[#eee] rounded-[50px] w-[100%] h-[2px]">
            </p>


            <p className="rounded-[50px] w-[100%] flex justify-center items-center">
                <span className="mt-[-14px] px-[5px] bg-white">Or sign in with </span>
            </p>

            

           </div>


           <div className="flex justify-center items-center gap-2 w-[100%] p-2 rounded-lg shadow border-2 hover:cursor-pointer hover:bg-[#eee] select-none">
           <FcGoogle size={22} />
            Sign In with google
           </div>

            </div>

        </div>


    </div>
    </>
}