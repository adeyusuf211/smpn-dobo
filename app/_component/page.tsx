import AnotherComponent from "@/components/share/another";
import ConsultationComponent from "@/components/share/consultation";
import FooterComponent from "@/components/share/footer/footer";
import HeroComponent from "@/components/share/hero";
import NavbarComponent from "@/components/share/navbar/menubar";
import MotivationComponent from "@/components/share/motivation";
import ProfileComponent from "@/components/share/profile";

export default function HomePageComponent() {
  return (
    <div className="overflow-x-hidden bg-hero 2xl:px-[200px] px-6">
      <NavbarComponent />
      <HeroComponent />
      <ProfileComponent />
      <AnotherComponent />
      <ConsultationComponent />
      <MotivationComponent />
      <HeroComponent showAddressLabel={true} />
      <FooterComponent />
    </div>
  );
}
