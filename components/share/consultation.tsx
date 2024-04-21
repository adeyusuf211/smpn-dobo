import ButtonWhatsappComponent from "./button-whatsapp";
import CardConsultationContact from "./card-consultation-contact";

export default function ConsultationComponent() {
  return (
    <div className="w-full h-full bg-white mt-5 mb-16 2xl:p-10 p-6">
      <ButtonWhatsappComponent />
      <div className="flex flex-col mt-10 mb-5">
        <h1 className="font-semibold text-3xl text-center">
          Konsultasi Gratis
        </h1>
        <CardConsultationContact />
      </div>
    </div>
  );
}
