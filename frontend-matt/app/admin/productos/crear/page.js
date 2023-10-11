import Card from "@/components/Card";
import Text from "@/components/Text";
import FormProduct from "@/components/admin/products/form";
import BackNavigation from "@/components/layout/BackNavigation";
import { GET_CATEGORIES } from "@/graphql/queries/categories";
import { getClient } from "@/libs/apollo-server";
import React from "react";

const Page = async () => {
  const { data } = await getClient().query({
    query: GET_CATEGORIES,
  });

  return (
    <Card>
      <BackNavigation />
      <Text>Crear un nuevo producto</Text>
      <FormProduct categories={data.categories} />
    </Card>
  );
};

export default Page;
