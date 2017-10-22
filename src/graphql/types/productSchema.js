export default `
  type Product {
    id: Int!
    name: String
    description: String
    manufacturer: Manufacturer
    amount: Quantity
  }

  type Query {
    products(offset: Int!, limit: Int!, id: Int, name: String): [Product]
    product(id: Int!): Product
  }
`;
