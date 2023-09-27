export default function DonationCard({ obj }) {
  console.log(obj);
  const cardBgStyle = {
    backgroundColor: obj.card_bg,
    color: obj.text_color,
  };
  const categoryBgStyle = {
    borderRadius: "4px",
    backgroundColor: obj.category_bg,
  };
  const buttonBgStyle = {
    backgroundColor: obj.text_color,
  };

  return (
    <div className=" flex w-full max-w-[48rem] flex-row rounded-xl bg-clip-border  shadow-md">
      <div className=" m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border">
        <img src={obj.image} className="h-full w-full object-cover" />
      </div>
      <div className="p-6" style={cardBgStyle}>
        <h6
          style={categoryBgStyle}
          className="text-center mb-4 px-2 py-2 w-28 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased"
        >
          {obj.category}
        </h6>
        <h4 className="mb-2  text-[#0B0B0B]  block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
          {obj.description}
        </h4>
        <p className="mb-8 block font-sans text-base font-semibold leading-relaxed antialiased">
          ${obj.price}
        </p>
        <button
          style={buttonBgStyle}
          className="px-4 py-2 rounded-lg text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
