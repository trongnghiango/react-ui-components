import { useEffect, useState } from "react";
import data from "./data.json";
import provides from "./provides.json";


export default function Rating() {

  const [isDropdownDisplayed, setDropdownDisplayed] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(provides)) {
      console.log('Length::', provides.length)
    }
  }, [])

  return (
    <>
      <div className="relative rating">
        <button onClick={() => setDropdownDisplayed(prev => !prev)} className="bg-white h-[30px] w-[200px] text-black flex items-center pl-3">
          -- Select your State --
        </button>
        {
          isDropdownDisplayed &&

          <div className="absolute overflow-auto mt-1 flex flex-col justify-center bg-white text-black">
            <div className="h-[350px]">
              {Array.isArray(provides) && provides.map((item, index) => (
                
                  <div key={index} className="min-w-[200px] px-4 py-2 cursor-pointer hover:bg-zinc-500">
                    <span>{item.name}</span>
                  </div>
                
              ))}
            </div>
          </div>
        }

      </div>
    </>
  );
}