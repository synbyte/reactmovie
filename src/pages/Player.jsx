import { useParams } from "react-router-dom";

const Player = () => {
    const {movieId} = useParams();
    return (
        <>
        <h1>hello playing {movieId}</h1>
        <iframe src={`https://www.2embed.cc/embed/${movieId}`} width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </>
    )
}
export default Player;