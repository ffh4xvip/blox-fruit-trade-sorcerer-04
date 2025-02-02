import { useQuery } from "@tanstack/react-query";

interface FruitData {
  name: string;
  physicalValue: number;
  permanentValue: number;
  category: string;
}

interface FruitsResponse {
  fruits: FruitData[];
}

const fetchFruits = async (): Promise<FruitData[]> => {
  // Get the base URL from the current page location
  const baseUrl = import.meta.env.BASE_URL;
  const response = await fetch(`${baseUrl}fruits.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch fruits data');
  }
  const data: FruitsResponse = await response.json();
  return data.fruits;
};

export const useFruits = () => {
  return useQuery({
    queryKey: ['fruits'],
    queryFn: fetchFruits,
  });
};