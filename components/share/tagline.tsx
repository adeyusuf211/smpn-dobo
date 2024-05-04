interface TaglineProps {
  readonly showAddressLabel?: boolean;
}

export default function TaglineComponent({ showAddressLabel }: TaglineProps) {
  return (
    <div className="flex flex-col w-full justify-end items-start py-4">
      <h1 className="2xl:text-3xl xl:text-3xl text-xl uppercase bg-yellow-400 font-semibold p-4 rounded-r-full pr-10 min-w-[750px]">
        mutiara
      </h1>
      <h1 className="2xl:text-3xl xl:text-3xl text-xl uppercase bg-blue-400 font-semibold p-4 text-white rounded-r-full pr-10 min-w-[850px]">
        mutu, intelektual dan karakter
      </h1>
      {showAddressLabel && (
        <h1 className="2xl:text-3xl xl:text-3xl text-xl uppercase bg-blue-700 font-semibold p-4 text-white min-w-[750px]">
          alamat sekolah sesuai gps
        </h1>
      )}
    </div>
  );
}
