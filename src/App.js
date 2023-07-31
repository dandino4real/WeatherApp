
import "./App.css";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdOutlineMyLocation } from "react-icons/md";
import Card from "./component/card";


function App() {
  const [query, setQuery] = useState("nigeria");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async (e) => {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query.toLowerCase()}&appid=b543da68018a588fb6d38cc7890d0310`
      );
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();

    setLoading(false);
  }, [query]);

  console.log(data);

  return (
    <div className="App">
       <header className=" bg-slate-800">
      <div className="py-5 w-11/12 m-auto flex flex-col ">
        <div className=" py-7 flex  text-base md:text-2xl justify-around items-center w-full text-white  p-2 uppercase">
          <div className="">
            {data?.name === undefined ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="text-lg md:text-4xl  py-1 ">{data.name}</div>
                <div className="py-1">
                  {(data?.main?.temp -  273.15).toFixed(2)}
                  <sup>0</sup>
                  <span>C</span>
                </div>
                <div className="py-1">{data.weather[0].main}</div>
              </>
            )}
          </div>
          <div >
            {data?.main?.humidity === undefined ? (
              <p>Loading...</p>
            ) : (
              <>
                <p>Humidity</p>
                <p>{data?.main?.humidity}%</p>
              </>
            )}
          </div>
          <div className="">
            {data?.wind?.speed === undefined ? (
              <p>Loading...</p>
            ) : (
              <>
                <p>Wind</p>
                <p>{data?.wind?.speed} K/M</p>
              </>
            )}
          </div>
        </div>
      </div>
    </header>

      <main className="max-w-2xl m-auto py-9 px-2">
        <div className="border-2 border-solid rounded-full flex justify-between items-center gap-2 px-4 h-14 text-xl">
          <GoSearch className="text-blue-500" />
          <input
            type="text"
            placeholder="Search Location"
            className="w-full border-none outline-none text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <MdOutlineMyLocation />
        </div>

        <div className="flex gap-3 flex-wrap justify-center md:justify-between my-10 ">
          <Card name={"Nigeria"} bg="bg-blue-500" onClick={() => setQuery("nigeria")}/>
          <Card name={"California"} bg="bg-green-400" onClick={() => setQuery("california")} />
          <Card name={"qatar"} bg="bg-pink-400"  onClick={() => setQuery("qatar")}/>
          <Card name={"japan"} bg="bg-orange-400"  onClick={() => setQuery("japan")}/>
        </div>
      </main>
    </div>
  );
}

export default App;
