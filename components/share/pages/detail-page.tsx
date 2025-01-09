"use client";

import Image from "next/image";
import { useEffect, useReducer } from "react";
import LogoSekolah from "@/public/assets/images/logo1.png";
import { formatDate } from "@/helpers/format--date";
import { useRouter } from "next/navigation";

interface Props {
  readonly parameter: string;
  readonly url: string;
  readonly type?: "Post" | "Galeri";
  readonly keyData?: {};
  readonly category?: string;
  readonly redirect?: string;
}

const initialState = {
  allData: [],
  detailData: {},
  loadingAll: false,
  loadingDetail: false,
  error: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_ALL_INIT":
      return { ...state, loadingAll: true, error: null };
    case "FETCH_DETAIL_INIT":
      return { ...state, loadingDetail: true, error: null };
    case "FETCH_ALL_SUCCESS":
      return {
        ...state,
        loadingAll: false,
        allData: action.payload,
        error: null,
      };
    case "FETCH_DETAIL_SUCCESS":
      return {
        ...state,
        loadingDetail: false,
        detailData: action.payload,
        error: null,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loadingAll: false,
        loadingDetail: false,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type`);
  }
};

export default function DetailPageComponent({
  parameter,
  url,
  category,
  redirect,
  type = "Post",
  keyData = {},
}: Props) {
  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);
  const BASE_PATH_URL_API = "https://admin.smpnegeri1dobo.sch.id/api";

  const fetchAllData = async () => {
    try {
      dispatch({ type: "FETCH_ALL_INIT" });

      const response = await fetch(`${BASE_PATH_URL_API}/${url}`);
      if (!response?.ok) return dispatch({ type: "FETCH_FAILURE" });

      const result: any = await response?.json();

      const filteredData = result?.data?.filter(
        (data: any) => data?.category?.toLowerCase() === category?.toLowerCase()
      );

      dispatch({ type: "FETCH_ALL_SUCCESS", payload: filteredData });
    } catch (error) {
      console.log("Error: ", error);
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  const fetchSpesificData = async () => {
    try {
      dispatch({ type: "FETCH_DETAIL_INIT" });

      const response = await fetch(`${BASE_PATH_URL_API}/${url}/${parameter}`);
      if (!response?.ok) return dispatch({ type: "FETCH_FAILURE" });

      const result: any = await response?.json();

      dispatch({ type: "FETCH_DETAIL_SUCCESS", payload: result.data });
    } catch (error) {
      console.log("Error: ", error);
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  const renderElements = () => {
    if (state.loadingAll || state.loadingDetail) {
      return (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      );
    }

    if (!state.loadingAll && !state.loadingDetail) {
      return (
        <div className="flex flex-col gap-10 w-full min-h-screen h-full">
          <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-36 md:mb-4 mb-0 uppercase">
            {state?.detailData?.name}
          </h1>
          <div className="mb-10 flex md:flex-row flex-col gap-5">
            <div className="flex flex-col gap-5 w-full">
              <div className="bg-white w-full rounded-2xl h-[350px] flex overflow-hidden">
                <Image
                  src={state?.detailData?.image}
                  alt="banner sambutan kepala sekolah"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="w-full h-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative bg-white w-full rounded-2xl p-5">
                <h5 className="font-bold text-gray-700 mb-4 text-xl">
                  Diterbitkan Tanggal:{" "}
                  {formatDate(state?.detailData?.published_at)}
                </h5>
                <h3
                  className="font-bold text-xl text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: state?.detailData?.intro,
                  }}
                />
                <br />
                <h3
                  className="text-gray-700 font-regular text-xl"
                  dangerouslySetInnerHTML={{
                    __html: state?.detailData?.content,
                  }}
                />
              </div>
            </div>
            <div className="h-full w-full md:max-w-[35%] bg-white md:p-10 p-5 rounded-xl">
              <div className="flex justify-center items-center py-5">
                <Image
                  src={LogoSekolah}
                  alt="logo sekolah"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between mt-5">
                  <h3 className="font-semibold text-xl text-gray-700">
                    {category} Lainnya:
                  </h3>
                </div>
                {state?.allData?.map((item: any) => (
                  <>
                    {item?.name?.toLowerCase() !==
                      state?.detailData?.name?.toLowerCase() && (
                      <ul
                        className="flex flex-column gap-3 border p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                        key={item?.id}
                      >
                        <li
                          className="font-semibold md:text-lg text-sm text-gray-700"
                          onClick={() =>
                            router.push(`/${redirect}/${item?.id}`)
                          }
                        >
                          {item?.name}
                        </li>
                      </ul>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchAllData();
    fetchSpesificData();
  }, []);

  return renderElements();
}
