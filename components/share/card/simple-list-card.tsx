import { Button } from "@/components/ui/button";

interface SimpleListCardProps {
  readonly key?: any;
  readonly title?: string;
  readonly loadingButton?: boolean;
  onClickDetail?: () => void;
  onClickDownload?: () => void;
}

export default function SimpleListCardComponent({
  key,
  title,
  onClickDetail,
  onClickDownload,
}: SimpleListCardProps) {
  return (
    <div
      className="w-full h-full max-h-[100px] bg-white py-5 px-5 rounded-lg flex justify-between items-center"
      key={key}
    >
      <h3 className="text-lg">{title}</h3>
      <div className="flex gap-3">
        <Button
          size="lg"
          variant="destructive"
          className="text-lg lg:w-32 w-full"
          onClick={onClickDetail}
        >
          View
        </Button>
        <Button
          size="lg"
          variant="blue"
          className="text-lg lg:w-32 w-full"
          onClick={onClickDownload}
        >
          Download
        </Button>
      </div>
    </div>
  );
}
