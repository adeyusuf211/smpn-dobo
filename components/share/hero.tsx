export default function HeroComponent() {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-600">
          Your Image or Text Here
        </h1>
      </div>
      <div className="flex flex-col w-full justify-end items-start p-4">
        <h1 className="text-3xl uppercase bg-yellow-400 font-semibold p-4">
          mutiara
        </h1>
        <h1 className="text-3xl uppercase bg-blue-400 font-semibold p-4 w-full">
          mutu, intelektual dan karakter
        </h1>
      </div>
    </div>
  );
}
