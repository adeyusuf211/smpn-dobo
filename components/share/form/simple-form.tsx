import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SimpleFormComponentProps {
  readonly showLabel?: boolean;
  readonly label?: string;
  readonly inputType: string;
  readonly inputName: string;
  readonly value?: string;
  readonly onChange?: any;
  readonly placeholder: string;
  readonly customClassName?: string;
}

export function SimpleFormComponent({
  showLabel,
  label,
  inputType,
  inputName,
  value,
  placeholder,
  customClassName,
  onChange,
}: SimpleFormComponentProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      {showLabel && <Label htmlFor={inputName}>{label}</Label>}
      <Input
        type={inputType || "text"}
        id={inputName}
        placeholder={placeholder}
        className={customClassName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
