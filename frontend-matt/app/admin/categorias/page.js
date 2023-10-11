import Card from "@/components/Card";
import Text from "@/components/Text";
import DataTable from "@/components/admin/products/table";
import BackNavigation from "@/components/layout/BackNavigation";
import { GET_PRODUCTS } from "@/graphql/queries/products";
import { getClient } from "@/libs/apollo-server";
import React from "react";

const ProductsPage = async () => {
  const { data } = await getClient().query({
    query: GET_PRODUCTS,
  });

  return (
    <Card>
      <BackNavigation />
      <Text>Productos</Text>
      <DataTable data={data.products} />
    </Card>
  );
};

export default ProductsPage;
