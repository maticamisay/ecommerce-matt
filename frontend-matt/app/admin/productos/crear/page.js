import Card from "@/components/Card";
import Text from "@/components/Text";
import Form from "@/components/admin/products/form";
import BackNavigation from "@/components/layout/BackNavigation";
import React from "react";

const Page = () => {
  return (
    <Card>
      <BackNavigation />
      <Text>Crear un nuevo producto</Text>
      <Form />
    </Card>
  );
};

export default Page;
