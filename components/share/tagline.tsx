interface TaglineProps {
  showAddressLabel?: boolean;
}

export default function TaglineComponent({ showAddressLabel }: TaglineProps) {
  return (
    <div className="flex flex-col w-full justify-end items-start p-4">
      <h1 className="text-3xl uppercase bg-yellow-400 font-semibold p-4">
        mutiara
      </h1>
      <h1 className="text-3xl uppercase bg-blue-400 font-semibold p-4">
        mutu, intelektual dan karakter
      </h1>
      {showAddressLabel && (
        <h1 className="text-3xl uppercase bg-blue-700 font-semibold p-4 text-white">
          alamat sekolah sesuai gps
        </h1>
      )}
    </div>
  );
}
