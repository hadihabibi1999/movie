import { useNavigate, useParams } from "react-router-dom";
import NavBar from './NavBar'
const EachMovieOfTable = () => {
  const params = useParams();

  return (
    <>
    <NavBar/>
 
      <div className="name-id">
        <h1>{params.name}</h1>
        <h1>{params.id}</h1>
      </div>
</>
  );
};

export default EachMovieOfTable;
