class Movie{
    constructor(title,studio,rating ='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        
    }
    
    getPG(movies){
        
        return movies.filter(Movie => Movie.rating === "PG");
    }

}

    
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", " ");
    
    console.log(casinoRoyale)