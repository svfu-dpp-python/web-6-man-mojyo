Vue.component("block", {
    template:`
    <div id="header">
    <div v-bind:style="header">  
    <h1> {{title}}</h1>
    </div>
</div>`,
    data(){
        return{
        title: "КИНОАФИША",
        header: {
            width: "100%",
            textAlign: "center"
            }

        }
        }
    
});
Vue.component("movies",{
    template: `
    <div id="movies"> 
        <div v-for="s in movie" v-bind:style="div1" id="movie1">
        <h1>{{s.title}}</h1>
        <img v-bind:src=s.pic v-bind:style="img">
        
        </div>
    </div>
`,
data(){
        return{
        movie: [{
            title: "Зеленая миля",
            pic: "images/greenmile.jpg"
        },
        {
            title: "Аватар",
            pic: "images/avatar.jpg"
        }
        ,
        {
            title: "Шрек",
            pic: "images/shrek.jpg"
        }
        ],
        div1: {
            margin: "10px",
            padding: "10px",
            width: "200px",
            height: "350px",
            border: "1px solid black",
            textAlign: "center",
        
        },
        img: {
            width: "200px",
            height: "250px"
        },
        
     
        }
    }
    
});

new Vue({
    el: "#main"
});




