import { useParams } from "react-router-dom";

const Player = () => {
    const {movieId} = useParams();
    return (
        <div className="h-screen">
        <h1>hello playing {movieId}</h1>
        <iframe className="" src={`https://www.2embed.cc/embed/${movieId}`} width="100%" height="90%" frameborder="0" scrolling="no" allowFullScreen></iframe>
        </div>
    )
}
export default Player;