let query=document.querySelector("#entry")
let btn_submit=document.querySelector("#submit")

async function fetch_movie(movie){
   let request=await fetch(`https://api.tvmaze.com/search/shows?q=${movie}}`) 
   let json_parse=await request.json();
   
   return json_parse
}

function create_Element_Cards(movie_information){

    let movie_card=document.createElement("div")
    movie_card.className="movie_card"
    
    let image=movie_information.show.image["medium"]
    let image_created=document.createElement("img")
    image_created.src=image
    
    
    let movie_info=document.createElement("p")
    movie_info.className="movie_information"
    movie_info.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita dicta amet earum vitae temporibus odio velit! Reprehenderit exercitationem voluptas, distinctio molestiae rerum sapiente, pariatur ducimus tempora provident asperiores quis commodi."

    let span=document.createElement("span")
    span.className="movie_information"

    span.appendChild(movie_info)
    
    movie_card.appendChild(image_created)
    movie_card.append(span)
    
    document.body.append(movie_card)
    

}




function movie_items(string_movies){
    if(string_movies.length!==0){
        for(item in string_movies){
            create_Element_Cards(string_movies[item])
            console.log(string_movies[item].score)
            console.log(string_movies[item].show.image)   
        }
    }
    else{
        console.log("No Information Available")
    }
    
}


btn_submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let query_val=query.value
    let information
     fetch_movie(query_val).then(data=>{
        
        information=data
        movie_items(information)
    })

    
})