import AnotherComponent from "@/components/share/another";
import HeroComponent from "@/components/share/hero";
import NavbarComponent from "@/components/share/menubar";
import ProfileComponent from "@/components/share/profile";

export default function HomePageComponent() {
  return (
    <div className="2xl:px-[400px] px-[200px]">
      <NavbarComponent />
      <HeroComponent />
      <ProfileComponent />
      <AnotherComponent />
    </div>
  );
}
