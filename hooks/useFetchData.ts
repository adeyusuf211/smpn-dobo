import { useEffect, useReducer } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
}

type State<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  isMutating: boolean;
};

type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: T }
  | { type: "FETCH_FAILURE"; error: string }
  | { type: "MUTATE_INIT" }
  | { type: "MUTATE_SUCCESS"; payload: T }
  | { type: "MUTATE_FAILURE"; error: string };

function dataFetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.error };
    case "MUTATE_INIT":
      return { ...state, isMutating: true, error: null };
    case "MUTATE_SUCCESS":
      return { ...state, isMutating: false, data: action.payload, error: null };
    case "MUTATE_FAILURE":
      return { ...state, isMutating: false, error: action.error };
    default:
      throw new Error(`Unhandled action type`);
  }
}

interface UseFetchDataOptions extends AxiosRequestConfig {
  staleTime?: number;
  cacheTime?: number;
}

export const useFetchData = <T>(
  key: string,
  url: string,
  options: UseFetchDataOptions = {}
) => {
  const initialState: State<T> = {
    data: null,
    loading: false,
    error: null,
    isMutating: false,
  };

  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  const { method = "GET", data: body = null, headers = {} } = options;

  const fetchData = async () => {
    dispatch({ type: "FETCH_INIT" });

    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios({
        url,
        method,
        data: body,
        headers,
      });

      const resultData = (response.data as any).data ?? response.data;

      dispatch({ type: "FETCH_SUCCESS", payload: resultData });
    } catch (error: any) {
      dispatch({ type: "FETCH_FAILURE", error: error.message });
    }
  };

  const mutateData = async (newData: any) => {
    dispatch({ type: "MUTATE_INIT" });

    try {
      const response: AxiosResponse<T> = await axios({
        url,
        method: method === "GET" ? "POST" : method,
        data: newData,
        headers,
      });
      dispatch({ type: "MUTATE_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "MUTATE_FAILURE", error: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, key]); // Only fetch data on initial mount or when URL/key changes

  return {
    data: state.data as T | null,
    loading: state.loading,
    error: state.error,
    isMutating: state.isMutating,
    mutateData,
  };
};
