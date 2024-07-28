interface AgendaComponentProps {
  date: any;
  monthAndYear: string;
  title: string;
  description: any;
  isHoliday?: boolean;
  key?: any;
}

export default function AgendaComponent({
  date,
  monthAndYear,
  title,
  description,
  isHoliday,
  key,
}: AgendaComponentProps) {
  return (
    <div className="flex flex-col" key={key}>
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center">
          <h1 className="flex justify-center items-center font-bold text-2xl text-white">
            {date}
          </h1>
          <p className="text-[12px] text-white">{monthAndYear}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold lg:text-base text-sm">{title}</h3>
          <p
            className={`font-semibold lg:text-sm text-[12px] ${
              isHoliday ? "text-red-600" : "text-blue-600"
            }`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}
