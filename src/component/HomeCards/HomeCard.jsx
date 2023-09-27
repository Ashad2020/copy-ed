import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function HomeCard({ data }) {
  let { card_bg, category_bg } = data;

  const cardBgStyle = {
    backgroundColor: card_bg,
    color: data.text_color,
  };
  const categoryBgStyle = {
    borderRadius: "4px",
    backgroundColor: category_bg,
  };

  return (
    <div className="w-68 flex flex-col rounded-xl bg-clip-border shadow-md">
      <Link to={`/Details/${data.id}`}>
        <img src={data.image} />
        <div className={`px-4 py-2 w-full rounded-b-xl`} style={cardBgStyle}>
          <h5
            style={categoryBgStyle}
            className="text-center mb-2 px-2 py-2 w-28 block font-sans text-xl leading-snug tracking-normal antialiased"
          >
            {data.category}
          </h5>
          <p className="block font-sans text-base font-semibold leading-relaxed  antialiased">
            {data.title}
          </p>
        </div>
      </Link>
    </div>
  );
}
