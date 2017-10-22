export default `
  type Quantity {
    id: Int!
    amount: Int
    product: Product
  }
  type Query {
    quantitys(offset: Int!, limit: Int!, id: Int, name: String): [Quantity]
    quantity(id: Int!): Quantity
  }
`;
