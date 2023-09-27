import HomeCard from "./HomeCard";

// eslint-disable-next-line react/prop-types
export default function HomeCards({ datas }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 px-28">
      {datas?.map((data, idx) => (
        <HomeCard key={idx} data={data}></HomeCard>
      ))}
    </div>
  );
}
