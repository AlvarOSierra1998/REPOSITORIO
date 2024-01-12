const API = "https://api.github.com/users/";


const app = Vue.createApp({
    data() {
        //SE INIZIALIZA A NULL PQ SE IRÁ RELLENANDO
        return {
            search: null,
            result: null,
            error: null,
            favorites: new Map()  
        };
    },
    //propiedades computadas para poder acortar operaciones que requiera mucha logica
    computed: {
        isFavorite(){
            return this.favorites.has(this.result.id)
        },
        allFavorites(){
            return  Array.from(this.favorites.values())
        }
    },
    created(){
        const savedFavorited = JSON.parse(window.localStorage.getItem("favorites"));
        console.log(savedFavorited);
        if(savedFavorited.length){
            const favorites = new Map(savedFavorited.map(favorite => [favorite.id, favorite]));
            this.favorites = favorites;
        }
    },

    methods: {
        async doSearch() {

            //esto lo que hace es limpiar todo cuando el resultado es error
            this.result = this.error = null;
            try {
                //CON THIS HACEMOS UN PUNTERO QUE MOSTRARÁ LO QUE S EPONE EN EL INPUT
                const response = await fetch(API + this.search)
                //acude a la propiedad ok de Json y lanza un error cuando no es true
                if(!response.ok) throw new Error("user not found");
                const data = await response.json();
                console.log(data);
                //se especifica el resultado del json 
                this.result = data;
            } catch(error) {
                this.error = error;
            }finally{
                this.search = null;
            }
        },
        addFavorite(){
            this.favorites.set(this.result.id, this.result)
            this.updateStorage();
        },
        removeFavorite(){
            this.favorites.delete(this.result.id)
            this.updateStorage();
        },
        updateStorage(){
            window.localStorage.setItem('fvorites' , JSON.stringify(this.result.allFavorites));
        }

    }
});
