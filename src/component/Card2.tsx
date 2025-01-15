
const Card2 = () => {
  return (
    <div className="bg-[#0A2540] text-white p-8 rounded-lg text-center w-full h-96 mx-auto mt-28">
      <h2 className="text-5xl mx-60 mt-16 mb-6">
        An enterprise template to ramp up your company website
      </h2>
      <div className="flex items-center justify-center gap-4 mt-12">
        <input
          type="email"
          placeholder="Your email address"
          className="w-96 h-14 px-4 py-3 border rounded-full text-black outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="bg-[#65E4A3] hover:bg-green-500 text-[#0A2640] font-bold py-3 w-52 h-14 px-6 rounded-full transition duration-300">
          Start now
        </button>
      </div>
    </div>
  )
}

export default Card2