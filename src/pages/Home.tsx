import Rating from "../components/Rating/Rating";

function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-screen items-center text-gray-200 bg-zinc-800">
        <Rating />
      </div>
    </>
  );
}

export default Home;
