import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $nombre: String!
    $precio: Float!
    $categoria: String!
  ) {
    createProduct(
      input: { name: $nombre, price: $precio, category: $categoria }
    ) {
      id
      name
      price
      category {
        id
        name
      }
    }
  }
`;
