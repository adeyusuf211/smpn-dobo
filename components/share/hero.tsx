import TaglineComponent from "./tagline";

export default function HeroComponent() {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-gray-600">
          Your Image or Text Here
        </h1>
      </div>
      <TaglineComponent />
    </div>
  );
}
