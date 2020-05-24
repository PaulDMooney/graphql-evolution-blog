# Graphql Evolution

This project is here to demonstrate some strategies on evolving a GraphQL API in a version safe way.

## Sample queries
```
query {
  books {
    ...book
  }
  booksv1inline: books {
    author
    title
  }
  booksv2:books(version:"v2") {
    ...bookv2
  }
}
fragment book on Book {
  author
  title
}
fragment bookv2 on BookV2 {
  author {
    firstName
    lastName
  }
  title
}
```