import Image from "next/image";
import TaglineComponent from "@/components/share/tagline";
import ModelSekolahImage from "@/public/assets/images/model-sekolah.png";

export default function TentangKamiComponent({ showAddressLabel }: any) {
  return (
    <section id="tentang-kami">
      <div className="w-full min-h-screen h-full relative flex gap-3 lg:mt-0 mt-40">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-full h-full flex justify-center items-center p-5">
            <div className="lg:w-[850px] w-full lg:p-10 p-6 bg-gray-200 absolute right-0">
              <h3 className="font-semibold text-2xl uppercase text-gray-700 text-center">
                deskripsi
              </h3>
              <h3 className="text-lg font-regular text-gray-600 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                doloremque ipsum libero, provident aliquam corrupti vero
                voluptatibus nulla beatae iusto.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dolore nihil itaque ea sapiente est porro velit commodi
                odit, nostrum optio sit perferendis tenetur a eum accusantium
                architecto repudiandae omnis laudantium, vitae fugiat possimus
                ipsam! Reprehenderit obcaecati numquam quis aliquam dolorum
                nesciunt pariatur fugit eum nemo, repellendus voluptate optio
                sequi nostrum iste maxime ex hic quibusdam exercitationem
                tempora est velit recusandae. Laboriosam rerum possimus expedita
                reprehenderit quasi iure perspiciatis id? numquam consectetur
                voluptatibus accusamus corporis provident.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates pariatur fugit, culpa saepe excepturi repudiandae
                corporis magni, nihil repellat quam, ex expedita in hic aperiam.
                Quae quam a quis voluptates. Doloremque natus illo blanditiis
                autem.
              </h3>
            </div>
          </div>
          <div className="w-[550px] h-[600px] p-4 absolute lg:bottom-0 -bottom-[40rem] lg:left-10 -left-10 mb-5">
            <Image
              src={ModelSekolahImage}
              fill
              style={{ objectFit: "cover" }}
              alt="model"
            />
          </div>
        </div>
        <div className="absolute lg:bottom-0 -bottom-[40rem] left-0">
          <TaglineComponent showAddressLabel={showAddressLabel} />
        </div>
      </div>
    </section>
  );
}
