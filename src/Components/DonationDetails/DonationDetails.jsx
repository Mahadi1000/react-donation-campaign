/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonationApplication } from "../../Utitlity/LocalStorage";



export default function DonationDetails() {
    const Donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const Donation = Donations.find((Donation) => Donation.id === idInt);

    
    const handleDonate = () => {
        
        console.log("Selected Donation:", Donation);
      saveDonationApplication(idInt);
      toast("You have successfulll donated");
    };
        

  return (
    <div className="mt-20 relative">
      <div className="w-5/6 mx-auto h-full relative">
        <img src={Donation.picture} alt="" />

        {/* Background Container */}
        <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.5)] h-130px"></div>

        {/* Button Container */}
        <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.5)] h-[130px] ">
          <button
            className="bg-red-500 p-3 rounded-lg cursor-pointer hover:text-white hover:bg-red-800 font-semibold ml-5 mt-10"
            onClick={handleDonate}
          >
            Donate &{Donation.price}
          </button>
        </div>
      </div>
      <div className="w-5/6 mx-auto mt-10">
        <h1 className="text-3xl font-semibold"> {Donation.description} </h1>
        <p className="mt-3 font-light">
          There are many things that can be done to ensure that all people have
          access to a good education. Governments can invest in public schools,
          provide financial assistance to students, and make sure that all
          schools have qualified teachers and resources. Families can support
          their children education by creating a learning environment at home
          and helping them with their schoolwork. Teachers can create a positive
          and supportive learning environment for their students and challenge
          them to reach their full potential.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

