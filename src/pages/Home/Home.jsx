import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Header/Banner/Banner";
import HomeCards from "../../component/HomeCards/HomeCards";
import { useEffect, useState } from "react";

export default function Home() {
  let datas = useLoaderData();
  let [text, setText] = useState("");
  let [found, setFound] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setText(event.target.search.value);
    event.target.search.value = "";
  }

  useEffect(() => {
    let filtered = datas.filter((item) => item.category === text);
    setFound(filtered);
  }, [text]);

  return (
    <>
      <Banner
        handleSubmit={handleSubmit}
        text={text}
        setFound={setFound}
      ></Banner>
      {found.length ? (
        <HomeCards datas={found}></HomeCards>
      ) : (
        <HomeCards datas={datas}></HomeCards>
      )}
    </>
  );
}
