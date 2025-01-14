import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className=" h-screen flex justify-center items-center flex-col gap-4 bg-white ">

        <div className="flex justify-center items-center flex-col" >
          <span className="font-semibold text-[2.9rem] text-[#0B5CFF] p-0 m-0">xMeet</span>
          <span className="font-semibold text-[2.8rem] p-0 m-0 text-[#0D213F]">Workplace</span>
        </div>

        <div className="gap-4 flex mt-[2%] flex-col">

        <button className="bg-[#0B5CFF] rounded-[6px] shadow-xl text-white px-4 w-[250px] hover:bg-[#0D68D8]  p-2">Join Meeting</button>

            <Link to="/sign-in" className="rounded-[6px] text-center text-[#0D213F] border border-[grey]  bg-white px-4 w-[250px] hover:bg-[#EFEFF4] shadow-md p-2">
           
            Sign In</Link>

        </div>





        <div className="absolute bottom-2 p-4 flex gap-4">
                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="hover:text-black">About <span className="font-semibold text-[grey] hover:text-black">xMeet</span></button>

                <button className="hover:text-black"> 
                English</button>


        </div>

      </div>




      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white border border-grey">
    <form method="dialog " className="bg-red-700">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 flex justify-center">✕</button>
    </form>
    <h3 className="font-semibold text-[2rem] text-center text-[#0B5CFF] select-none my-2">xMeet</h3>
    <p className="text-black text-center my-1">Version : 0.1.0</p>

    <p className="text-[grey] text-center select-none my-2">Copyright ©2012-2025 Zoom Communications, Inc. All rights reserved.</p>


    <div className="flex justify-center mt-[10px] ">
    <a href="https://github.com/akashmishra-777/xMeet_Frontend" className="text-[#0B5CFF] hover:text-[blue] text-center  w-[100%] select-none flex justify-center items-center gap-2">
    
    Our GitHub Page<FaExternalLinkAlt/></a>
    </div>



  </div>
</dialog>
    </>
  );
}
