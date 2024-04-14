const buttonFields = [
  "For You",
  "MI vs CSK",
  "TATA IPL",
  "KKR vs LSG",
  "MTV Splitsvilla",
  "Kids & Family",
  "TATA IPL Highlights",
  "ISL",
  "Coming Soon",
];

const ButtonCarousel = () => {
  return (
    <div className="max-w-screen-2xl flex  items-center justify-start mx-auto ">
      {buttonFields.map((item, index) => {
        return (
        <div key={index} className={`px-3 py-2 ${item === "For You" ? "bg-white text-black" : "bg-[#373737] hover:bg-gray-600" } text-white font-semibold rounded-full flex items-center justify-center mt-6 ml-2 sm:whitespace-nowrap`}>
          {item}
        </div>
        );
      })}
    </div>
  );
};

export default ButtonCarousel;
