const storedBooks = localStorage.getItem("books");

const books = storedBooks ? JSON.parse(storedBooks) : [
  {
    id: 1,
    bookName: "1984",
    writer: "George Orwell",
    description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother.",
  },
  {
    id: 2,
    bookName: "The Alchemist",
    writer: "Paulo Coelho",
    description: "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
  },
  {
    id: 3,
    bookName: "Kafka on the Shore",
    writer: "Haruki Murakami",
    description: "Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami. Its 2005 English translation was among 'The 10 Best Books of 2005' from The New York Times and received the World Fantasy Award for 2006.",
  },
  {
    id: 4,
    bookName: "C++",
    writer: "Herbert Scheldit",
    description: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'.",
  },
];
export default books;
