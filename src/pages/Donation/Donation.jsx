import { useState } from "react";
import DonationCard from "../../component/DonationCard/DonationCard";

export default function Donation() {
  const [isShow, setIsShow] = useState(false);
  const Donation = JSON.parse(localStorage.getItem("Donated"));

  return (
    <>
      <div className="grid grid-cols-2 mt-8 gap-4 px-24">
        {isShow
          ? Donation?.map((obj) => {
              return <DonationCard key={obj.id} obj={obj}></DonationCard>;
            })
          : Donation?.slice(0, 4).map((obj) => {
              return <DonationCard key={obj.id} obj={obj}></DonationCard>;
            })}
      </div>
      {Donation?.length > 4 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="my-4 select-none rounded-lg bg-[#009444] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none block mx-auto"
        >
          {isShow ? "See less" : "See more"}
        </button>
      )}
    </>
  );
}
