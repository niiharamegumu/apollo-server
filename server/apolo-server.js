const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "NARUTO -ナルト-",
    author: "岸本 斉史",
  },
  {
    title: "HUNTER×HUNTER",
    author: "冨樫 義博",
  },
  {
    title: "ONE PIECE",
    author: "尾田栄一郎",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
