import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

type FetchFunction<T> = () => Promise<T>;

export function useMemoQuery<T>(queryKey: string[], fetchFn: FetchFunction<T>, isEnabled?: boolean) {
  const { data, ...rest } = useQuery({
    queryKey,
    queryFn: fetchFn,
    enabled: isEnabled,
    retry: false,
    staleTime: 1000 * 60 * 5, 
  });

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, ...rest };
}