import { useQuery } from "@tanstack/react-query";
import React from "react";

const getCryptoNumber = async (): Promise<number> => {
  const resp = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());

  return Number(resp);
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
    // refetchOnWindowFocus: false,
    retry: false,
    // retryDelay: 1000,
  });

  return {
    randomQuery,
  };
};
