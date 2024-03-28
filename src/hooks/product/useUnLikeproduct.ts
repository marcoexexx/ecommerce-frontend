import AppError, { AppErrorKind } from "@/libs/exceptions";
import Result, { Err, Ok } from "@/libs/result";

import { CacheResource } from "@/context/cacheKey";
import { ProductApiService } from "@/services/productsApi";
import { useMutation } from "@tanstack/react-query";

const apiService = ProductApiService.new();

export function useUnLikeProduct() {
  const mutation = useMutation({
    mutationFn: (...args: Parameters<typeof apiService.unlike>) =>
      apiService.unlike(...args),
    onError(err: any) {
    },
    onSuccess() {
    },
  });

  const try_data: Result<typeof mutation.data, AppError> =
    !!mutation.error && mutation.isError
      ? Err(
        AppError.new(
          (mutation.error as any).kind || AppErrorKind.ApiError,
          mutation.error.message,
        ),
      )
      : Ok(mutation.data);

  return {
    ...mutation,
    try_data,
  };
}
