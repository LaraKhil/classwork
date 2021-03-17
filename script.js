const form = $("#form");
const btnSub = $(".btn-submit");


function test(){

    
    const OMDB_URL = "http://www.omdbapi.com/?apikey=5491a5c6&t=";
    let userUrl = $("#text").val();
    let finalUrl = OMDB_URL + userUrl;
    console.log(finalUrl);

    fetch(finalUrl)
    .then((respond)=> respond.json())
    .then((responded)=> {
    $(".lara").html(`
    <h3 class="title"> ${ responded.Title}</h3>
    <p class="p plot">  ${ responded.Plot}</p>
    <p class="p"> runtime : ${ responded.Runtime}</p>
    <p class="p"> director : ${ responded.Director}</p>
    <p class="p"> genre : ${ responded.Genre}</p>
    `)

    $(".btn-film").css("display", "inline");

    $(".info-window").html(`
    <h3 class="title"> ${ responded.Title}</h3>
    <p class="p"> country : ${ responded.Country}</p>
    <p class="p"> rating : ${ responded.Rated}</p>
    <p class="p"> runtime : ${ responded.Runtime}</p>
    <p class="p"> director : ${ responded.Director}</p>
    <p class="p"> writer : ${ responded.Writer}</p>
    <p class="p"> actors : ${ responded.Actors}</p>
    <p class="p"> reliased : ${ responded.Released}</p>
    <p class="p"> genre : ${ responded.Genre}</p>
    <p class="p"> country : ${ responded.Country}</p>
    <p class="p"> awards : ${ responded.Awards}</p>
    `)
    
})};

$(".more").on("click", ()=>{
    $(".more-info").css("display", "flex");
});

$(".btn-close").on("click", ()=>{
    $(".more-info").css("display", "none");
    test();
});


form.on("submit",(event)=>{
     event.preventDefault();
     test();
});


















