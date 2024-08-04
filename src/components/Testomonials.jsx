import { TiStarFullOutline } from "react-icons/ti";

const Testomonials = () => {
  return (
    <div className='w-full p-5 bg-[#1f2029] rounded-md'>
      <h2 className="text-2xl text-gray-200 font-bold capitalize mb-5">customers feedback </h2>
      <div className="border-b border-gray-700 pb-4">
        <div className="flex gap-3 items-center">
          <img src="https://i.pinimg.com/originals/7b/87/f0/7b87f0800074270bdbcdea3e99c022af.jpg" className="w-12 h-12 bg-green-500 rounded-full object-cover" alt="" />
          <span className="text-gray-300 font-semibold capitalize">jenny wilson</span>
        </div>
        <span className="flex gap-1 items-center my-2">
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-white" />
        </span>
        <p className="text-gray-400">The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had aburger over greens (gluten free) which was also very good. They were very conscientious abot gluten allergies</p>
      </div>

      <div className="my-5 border-b border-gray-700 pb-4">
        <div className="flex gap-3 items-center">
          <img src="https://qph.cf2.quoracdn.net/main-thumb-1941248311-200-ojzyntcklynyxmslssketirfpmftzhrk.jpeg" className="w-12 h-12 bg-green-500 rounded-full object-cover" alt="" />
          <span className="text-gray-300 font-semibold capitalize">dianee russell</span>
        </div>
        <span className="flex gap-1 items-center my-2">
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
        </span>
        <p className="text-gray-400">We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
      </div>

      <div>
        <div className="flex gap-3 items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQJjsMGNg_nh-NOrDPsyVmI5ylafKYuKAIRFQk-A-kvrBTVi0t2vBo2LHWp_BCUaKJNU&usqp=CAU" className="w-12 h-12 bg-green-500 rounded-full object-cover" alt="" />
          <span className="text-gray-300 font-semibold capitalize">devone lane</span>
        </div>
        <span className="flex gap-1 items-center my-2">
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-yellow-500" />
          <TiStarFullOutline className="text-xl text-white" />
        </span>
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quasi!</p>
      </div>
    </div>
  )
}

export default Testomonials
