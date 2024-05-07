<!-- <template>
  <h1> HELLO USER, WELCOME TO THIS PAGE</h1>
</template>
<script>
  export default{
    name:'BooksPage'
  }
</script> -->


<template>
  <div>
    <div v-for="(book, index) in books" :key="index">
      <h2>Title: {{ book.title }}</h2>
      <p>ISBN: {{ book.isbn }}</p>
      <p>Page Count: {{ book.pageCount }}</p>
      <p>Authors: {{ book.authors.join(', ') }}</p>
      <p>Genre: {{ book.genre }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          title: "ADVENTURES OF SHERLOCK HOLMES",
          isbn: "9780142437054",
          pageCount: 192,
          authors: ["Arthur Conan Doyle"],
          genre: "ADVENTURE"
        },
        {
          title: "THE WAR OF THE WORLDS",
          isbn: "9780486284546",
          pageCount: 192,
          authors: ["H.G. Wells"],
          genre: "WAR"
        },
        {
          title: "THE GAME",
          isbn: "9781461174403",
          pageCount: 222,
          authors: ["Neil Strauss"],
          genre: "SPORTS"
        },
        {
          title: "THE PHANTOM OF THE OPERA",
          isbn: "9780451528551",
          pageCount: 368,
          authors: ["Gaston Leroux"],
          genre: "HORROR"
        },
        {
          title: "THE SHUNNED HOUSE",
          isbn: "9781617201744",
          pageCount: 24,
          authors: ["H.P. Lovecraft"],
          genre: "HORROR"
        },
        {
          title: "INVISIBLE MAN",
          isbn: "9780141439983",
          pageCount: 208,
          authors: ["H.G. Wells"],
          genre: "MYSTERIES"
        },
        {
          title: "FROM THE EARTH TO THE MOON",
          isbn: "9780140433069",
          pageCount: 288,
          authors: ["Jules Verne"],
          genre: "SPACE"
        },
        {
          title: "TWENTY THOUSAND LEAGUES UNDER THE SEAS",
          isbn: "9780141431260",
          pageCount: 384,
          authors: ["Jules Verne"],
          genre: "THRILL"
        },
        {
          title: "WARLORD OF MARS",
          isbn: "9780143104889",
          pageCount: 368,
          authors: ["Edgar Rice Burroughs"],
          genre: "SPACE"
        },
        {
          title: "THE MASTER OF THE WORLD",
          isbn: "9781440436162",
          pageCount: 172,
          authors: ["Jules Verne"],
          genre: "SUSPENSE"
        }
      ]
    };
  }
};
</script>