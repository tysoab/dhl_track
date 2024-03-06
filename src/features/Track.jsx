import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TrackError from "../components/TrackError";
import ShipmentDetail from "../components/ShipmentDetail";
import { fetchData } from "../store/helper";

export default function Track() {
  const [{ data, isLoading, error }, setData] = useState({});
  const { id: trackId } = useParams();

  useEffect(() => {
    const title = document.title;
    document.title = `DHL | tracking: ${trackId}`;

    return () => (document.title = title);
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await fetchData(trackId);
      setData(res);
    }
    getData();
  }, []);

  let content;
  if (isLoading)
    content = (
      <div className="text-center py-5 ">
        <i
          className="fa-solid fa-circle-notch fa-spin-pulse text-warning"
          style={{ fontSize: "6rem" }}
        ></i>
      </div>
    );

  if (error) content = <TrackError trackId={trackId} />;
  if (data) content = <ShipmentDetail data={data} />;
  return <div>{content}</div>;
}
