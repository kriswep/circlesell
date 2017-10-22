export default `
type Manufacturer {
  id: Int!
  name: String
  products: [Product]
}
type Query {
  manufacturers(offset: Int!, limit: Int!, id: Int, name: String): [Manufacturer]
  manufacturer(id: Int!): Manufacturer
}
`;
