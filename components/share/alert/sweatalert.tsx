// eslint-disable-next-line
"use client";

import { useEffect } from "react";
import Swal from "sweetalert2";

interface SweetAlertProps {
  readonly title: string;
  readonly text: any;
  readonly icon: "success" | "error" | "warning" | "info" | "question";
  readonly show: boolean;
}

function SweetAlertComponent({ title, text, icon, show }: SweetAlertProps) {
  useEffect(() => {
    if (show) {
      // Tampilkan SweetAlert hanya jika 'show' bernilai true
      Swal.fire({
        title: title,
        text: text,
        icon: icon,
      });
    }
  }, [show, title, text, icon]);

  return null;
}

export default SweetAlertComponent;
