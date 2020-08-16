<template>
    <div>
        <h1>Book Finder</h1>
        <div style="margin-bottom:15px">
            <small>Made by OmerSari</small>
        </div>
        
        
        <input class="search" v-model="search" type="text" placeholder="Type author, book name or subject">
        <button @click="searchBooks" class="searchButton">SEARCH</button>
        <p v-if="myError" style="color:red">{{myError}}</p>
        <div class="books">
            <div v-for="(item, id) in books" :key="id" class="myBook">
                <a :href="item.volumeInfo.infoLink" target="_blank"><p style="font-weight:bold">{{item.volumeInfo.title}}</p></a>   
                <div class="Info">
                    <div class="image">
                    <img :src="item.volumeInfo.imageLinks.smallThumbnail" alt="">    
                </div>
                <div class="otherInfo">
                    <p> Authors:<span v-for="(authors, aid) in item.volumeInfo.authors" :key="aid">{{authors}}  </span> </p>
                    <p> <span style="font-weight:bold">Publisher:</span> {{item.volumeInfo.publisher}}</p>   
                    <p> <span style="font-weight:bold">Published:</span> {{item.volumeInfo.publishedDate}}</p>      
                </div>
                </div>
                
                
            </div>
        </div>
        <template v-if="books">
        <p v-if="books.length === 0">There are books right now</p>
        </template>
        <p v-if="!books">There are no books matching your search</p>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            search : "",
            books : [],
            myError : null
        }
    },
    methods: {
        searchBooks() {
            if (this.search === "") {
                this.myError = "Please enter a valid query."
           
            }
            else {
                 axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.search}`).then( response => 
                ( this.books = response.data.items)
            )
            this.myError = null
            }
           
                
        }
    } 
}
    

</script>


<style scoped>

.search {
    padding: 0.5em;
    width: 460px;
    height: 40px;
    border:1px solid #034f84;
    text-align: center;

}

.searchButton {
    background-color: #034f84;
    height:55.31px;
    padding: 1em;
    color:white;

}

h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #034f84;
    
}

.books {
    margin:20px auto;
    display: flex ;
    justify-content: space-around;
    width: 900px;
    flex-wrap: wrap;
}

.books a {
    text-decoration: none;
}

.myBook {
    width: 400px;
    border: 1px solid black;
    background: #fefbd8;
    margin-left:10px;
    margin-bottom:10px;
    padding: 10px;
}

.myBook p {
    text-align: left;
    margin-left: 5px;
    height: auto;
}



.Info {
    display: flex;
    justify-content: space-around;
    
}

.image {
    width: 128px;
    height: auto;
    margin-left: 5px;
}

.image img {
     width: 128px;
    height: auto;
}

.otherInfo {
    margin-left:10px;
}




</style>