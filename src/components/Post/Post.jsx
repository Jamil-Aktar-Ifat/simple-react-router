import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid grey",
    margin: "10px",
    padding: "20px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h2>User ID: {id}</h2>

      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      {/* <button onClick={handleShowDetail()}>Show Details</button> */}
      <p>Jamil</p>
      <button onClick={handleShowDetail}>Click Show Details</button>
    </div>
  );
};

export default Post;
