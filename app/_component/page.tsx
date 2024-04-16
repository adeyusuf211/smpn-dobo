import AnotherComponent from "@/components/share/another";
import ConsultationComponent from "@/components/share/consultation";
import HeroComponent from "@/components/share/hero";
import NavbarComponent from "@/components/share/menubar";
import MotivationComponent from "@/components/share/motivation";
import ProfileComponent from "@/components/share/profile";

export default function HomePageComponent() {
  return (
    <div className="2xl:px-[250px] lg:px-[150px] px-[20px]">
      <NavbarComponent />
      <HeroComponent />
      <ProfileComponent />
      <AnotherComponent />
      <ConsultationComponent />
      <MotivationComponent />
      <HeroComponent showAddressLabel={true} />
    </div>
  );
}
