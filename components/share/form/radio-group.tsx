"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioGroupProps {
  contentList: Array<any>;
}

export function RadioGroupComponent({ contentList }: RadioGroupProps) {
  const handleDivClick = (value: any) => {
    const radio = document.getElementById(value) as HTMLInputElement | null;
    if (radio) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change", { bubbles: true })); // Dispatch change event
    }
  };
  return (
    <RadioGroup defaultValue="comfortable">
      {contentList.map((content) => (
        <div
          className="flex items-center space-x-2 p-5 bg-white-100 hover:bg-blue-100 transition-all"
          onClick={() => handleDivClick(content.value)}
        >
          <RadioGroupItem value={content.value} id={content.value} />
          <Label htmlFor={content.value} onClick={(e) => e.stopPropagation()}>
            {content.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
