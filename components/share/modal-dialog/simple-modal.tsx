import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RadioGroupComponent } from "../form/radio-group";

interface SimpleModalDialogProps {
  titleDialog: string;
  modalHeaderTitle: string;
  dialogWidth?: string;
  titleButtonAdd?: string;
  contentType: "Text" | "Form";
  contentList?: Array<any>;
}

export function SimpleModalDialog({
  titleDialog,
  modalHeaderTitle,
  dialogWidth,
  titleButtonAdd,
  contentType,
  contentList,
}: SimpleModalDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="lg"
          className="uppercase text-lg h-full px-10 py-5"
        >
          {titleDialog}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={dialogWidth || "min-w-xl"}>
        <AlertDialogHeader>
          <AlertDialogTitle>{modalHeaderTitle}</AlertDialogTitle>
          <AlertDialogDescription>
            {contentType === "Text" ? (
              <p className="text-lg">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
            ) : (
              <RadioGroupComponent contentList={contentList} />
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>{titleButtonAdd || "Continue"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
