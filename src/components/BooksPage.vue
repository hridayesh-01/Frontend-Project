<template>
    <div>
      <img id="image" src="../assets/book image.webp" />
      <h1 style="color: greenyellow">WELCOME TO BOOKS PAGE</h1>
      <h1>---------------------------------------</h1><br>
      <h2 style="color: blueviolet">List of books</h2><br>
      <table class="books">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in books" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ book.title }}</td>
            <td>{{ book.genre }}</td>
            <td><a :href="book.link">Read</a></td>
          </tr>
        </tbody>
      </table>
      <h2>----------------------------------------------------------</h2><br>
      <h2 style="color: goldenrod">:) THANKS.VISIT AGAIN</h2>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'BooksPage',
    data() {
      return {
        books: [
          { title: "ADVENTURES OF SHERLOCK HOLMES", link: "https://archive.org/details/adventureofsherl0000unse/page/140/mode/2up?ref=ol&view=theater", genre: "ADVENTURE" },
          { title: "THE WAR OF THE WORLDS", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=66.epub", genre: "WAR" },
          { title: "THE GAME", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=90.epub", genre: "SPORTS" },
          { title: "THE PHANTOM OF THE OPERA", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=76.epub", genre: "HORROR" },
          { title: "THE SHUNNED HOUSE", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=485.epub", genre: "HORROR" },
          { title: "INVISIBLE MAN", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=101.epub", genre: "MYSTERY" },
          { title: "FROM THE EARTH TO THE MOON", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=495.epub", genre: "SPACE" },
          { title: "TWENTY THOUSAND LEAGUES UNDER THE SEAS", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=550.epub", genre: "THRILL" },
          { title: "WARLORD OF MARS", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=517.epub", genre: "SPACE" },
          { title: "THE MASTER OF THE WORLD", link: "https://www.pdfbooksworld.com/bibi/pre.html?book=1224.epub", genre: "SUSPENSE" }
        ]
      }
    },
    methods:{
        async BooksPage()
        {
            let result = await axios.post("http://localhost:3000/books",{
                title:this.title,
                genre:this.genre,
                link:this.link
            });

            console.warn(result);
            if(result.status==201)
            {
                this.$router.push({title:'BookDetails'})
            }
        }
    }

  }
  </script>
  
  <style>
  #image {
    width: 90px;
  }
  
  .books {
    border-collapse: collapse;
    width: 100%;
  }
  
  .books th,
  .books td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .books th {
    background-color: #f2f2f2;
  }
  </style>