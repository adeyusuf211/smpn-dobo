import Image from "next/image";
import TaglineComponent from "@/components/share/tagline";
import ModelSekolahImage from "@/public/assets/images/model-sekolah.png";

export default function TentangKamiComponent({ showAddressLabel }: any) {
  return (
    <section id="tentang-kami">
      <div className="w-full h-screen relative flex gap-3">
        <div className="flex md:flex-row flex-col-reverse justify-between">
          <div className="w-full h-full flex justify-center items-center p-5">
            <div className="w-[850px] p-10 bg-gray-200 absolute right-10">
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
          <div className="w-[550px] h-[600px] p-4 absolute bottom-0 left-10 mb-5">
            <Image
              src={ModelSekolahImage}
              fill
              style={{ objectFit: "cover" }}
              alt="model"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <TaglineComponent showAddressLabel={showAddressLabel} />
        </div>
      </div>
    </section>
  );
}
