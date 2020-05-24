interface Book {
  title: string;
}

interface BookV1 extends Book {
  author: string;
}

interface BookV2 extends Book {
  author: Author;
}

interface Author {
  firstName: string;
  lastName: string;
}

const booksV1 = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const booksV2: BookV2[] = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: {
      firstName: 'J.K.',
      lastName: 'Rowling',
    },
  },
  {
    title: 'Jurassic Park',
    author: {
      firstName: 'Michael',
      lastName: 'Crichton',
    },
  },
];

export const resolvers = {
  Query: {
    books: (_, args): Book[] => {
      if (args?.version === 'v2') {
        return booksV2.map((item) => {
          item['version'] = 'v2';
          return item;
        });
      } else {
        return booksV1;
      }
    },
  },
  IBook: {
    __resolveType(obj: Book): string {
      if (obj?.['version'] === 'v2') {
        return 'BookV2';
      } else {
        return 'Book';
      }
    },
  },
};
