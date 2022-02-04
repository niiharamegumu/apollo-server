import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { useEffect, useState } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

type Book = {
  title: string;
  author: string;
};

const App = () => {
  const [books, setBooks] = useState<Book[]>([{ title: "", author: "" }]);
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            books {
              title
              author
            }
          }
        `,
      })
      .then((result) => setBooks(result.data.books));
  }, []);
  return (
    <ApolloProvider client={client}>
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </ApolloProvider>
  );
};
export default App;
