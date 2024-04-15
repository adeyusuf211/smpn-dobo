interface HeroProps {
  readonly showAddressLabel?: boolean;
}

import TaglineComponent from "./tagline";

export default function HeroComponent({ showAddressLabel }: HeroProps) {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="2xl:text-4xl xl:text-4xl lg:text-3xl text-2xl font-semibold text-gray-600">
          Your Image or Text Here
        </h1>
      </div>
      <TaglineComponent showAddressLabel={showAddressLabel} />
    </div>
  );
}
