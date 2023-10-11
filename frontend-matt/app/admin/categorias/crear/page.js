import Card from "@/components/Card";
import Text from "@/components/Text";
import FormCategory from "@/components/admin/categories/form";
import BackNavigation from "@/components/layout/BackNavigation";
import React from "react";

const Page = () => {
  return (
    <Card>
      <BackNavigation />
      <Text>Crear una nueva categoría</Text>
      <FormCategory />
    </Card>
  );
};

export default Page;
