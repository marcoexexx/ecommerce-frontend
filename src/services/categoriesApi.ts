import { CacheResource } from "@/context/cacheKey";
import { CategoryWhereInput } from "@/context/category";
import { authApi } from "./authApi";
import { BaseApiService } from "./baseApiService";
import {
  Category,
  GenericResponse,
  HttpListResponse,
  Pagination,
  QueryOptionArgs,
} from "./types";

export class CategoryApiService
  extends BaseApiService<CategoryWhereInput, Category>
{
  constructor(public repo: CacheResource) {
    super();
  }

  static new() {
    return new CategoryApiService(CacheResource.Category);
  }

  async findMany(
    opt: QueryOptionArgs,
    where: {
      filter?: CategoryWhereInput["where"];
      pagination: Pagination;
      include?: CategoryWhereInput["include"];
    },
  ): Promise<HttpListResponse<Category>> {
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
      filter: { id: string | undefined; };
      include?: CategoryWhereInput["include"];
    },
  ): Promise<GenericResponse<Category, "category"> | undefined> {
    const { filter: { id }, include } = where;
    const url = `/${this.repo}/detail/${id}`;

    if (!id) return;
    const { data } = await authApi.get(url, {
      ...opt,
      params: { include },
    });
    return data;
  }
}
