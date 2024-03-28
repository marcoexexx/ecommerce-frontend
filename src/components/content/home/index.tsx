import { useGetCategories } from "@/hooks/category";

export default function RenderCategoryProducts() {
  const { try_data } = useGetCategories({
    pagination: {
      page: 1,
      pageSize: 3,
    },
  });

  const categories = try_data.ok_or_throw();

  return (
    <>
      {categories?.results.map(cate => <h1>{cate.name}</h1>)}
    </>
  );
}
