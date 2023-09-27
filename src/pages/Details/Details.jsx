import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

import DetailsCard from "./DetailsCard";

export default function Details() {
  let [singleData, setSingleData] = useState({});

  const { id } = useParams();
  let datas = useLoaderData();

  useEffect(() => {
    let findObj = datas?.find((data) => data.id === id);
    setSingleData(findObj);
  }, [id, datas]);
  return (
    <div>
      <DetailsCard obj={singleData}></DetailsCard>
    </div>
  );
}
