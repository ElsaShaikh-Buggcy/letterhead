import { getLetterHead } from "@/api/helper";
import { UseQueryConfig } from "@/api/types/common";
import { LetterHeadApiResponse } from "@/schema/letter";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export const useGetLetterHead = (
  params: { id: string },
  config: UseQueryConfig = {}
) =>
  useQuery({
    queryKey: ["letterHead", params],
    queryFn: () => getLetterHead(params),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 5,
    ...config,
    enabled: !!params?.id,
  }) as UseQueryResult<LetterHeadApiResponse, Error>;
