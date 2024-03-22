import { CacheResource } from "@/context/cacheKey";
import { ProductWhereInput } from "@/context/product";
import { authApi } from "./authApi";
import { BaseApiService } from "./baseApiService";
import {
  GenericResponse,
  HttpListResponse,
  HttpResponse,
  Pagination,
  Product,
  ProductSalesCategoriesResponse,
  QueryOptionArgs,
} from "./types";

export class ProductApiService extends BaseApiService<ProductWhereInput, Product> {
  constructor(public repo: CacheResource) {
    super();
  }

  static new() {
    return new ProductApiService(CacheResource.Product);
  }

  async findMany(
    opt: QueryOptionArgs,
    where: {
      filter?: ProductWhereInput["where"];
      pagination: Pagination;
      include?: ProductWhereInput["include"];
    },
  ): Promise<HttpListResponse<Product>> {
    const url = `/${this.repo}`;
    const { filter, pagination, include } = where;

    const { data } = await authApi.get(url, {
      ...opt,
      params: {
        filter,
        pagination,
        include,
        orderBy: {
          updatedAt: "desc",
        },
      },
    });
    return data;
  }

  async find(
    opt: QueryOptionArgs,
    where: {
      filter: { id: string | undefined };
      include?: ProductWhereInput["include"];
    },
  ): Promise<GenericResponse<Product, "product"> | undefined> {
    const { filter: { id }, include } = where;
    const url = `/${this.repo}/detail/${id}`;

    if (!id) return;
    const { data } = await authApi.get(url, {
      ...opt,
      params: { include },
    });
    return data;
  }

  async findManySaleCategories(
    opt: QueryOptionArgs,
    { productId }: { productId: string | undefined },
  ): Promise<HttpListResponse<ProductSalesCategoriesResponse> | undefined> {
    const url = `/${this.repo}/detail/${productId}/sales`;

    if (!productId) return;
    const { data } = await authApi.get(url, {
      ...opt,
    });
    return data;
  }

  async like(
    { userId, productId }: { userId: string; productId: string },
  ): Promise<GenericResponse<Product, "product"> | undefined> {
    const url = `/${this.repo}/like/${productId}`;

    const res = await authApi.patch(url, { userId });
    return res.data;
  }

  async unlike({ userId, productId }: { userId: string; productId: string }): Promise<HttpResponse> {
    const url = `/${this.repo}/unlike/${productId}`;

    const res = await authApi.patch(url, { userId });
    return res.data;
  }
}
