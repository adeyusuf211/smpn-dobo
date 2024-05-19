import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SimpleSelectBoxComponentProps {
  placeholder: string;
  inputWidth?: string;
  inputData: string[];
}

export function SimpleSelectBoxComponent({
  placeholder,
  inputWidth,
  inputData,
}: SimpleSelectBoxComponentProps) {
  return (
    <Select>
      <SelectTrigger className={`${inputWidth || "w-[200px]"} bg-gray-100`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {inputData?.map((value) => (
          <SelectGroup key={value}>
            <SelectItem value={value}>{value}</SelectItem>
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
