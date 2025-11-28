let Movie=()=>{
    let movieName="RRR";
    let imbdRating=8.5;
    let image="https://th.bing.com/th/id/OIP.jynL3GxUu0bsqU-k1ZTSPAHaEK?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3";
    return <div>
        <h2>MovieName:{movieName}</h2>
        <h4>IMBD:{imbdRating}</h4>
        <img src ={image} alt="movie poster"/>
    </div>
}
export default Movie;