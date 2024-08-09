import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { postId } = useParams();
  const { title, body } = post;

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log(postId);

  return (
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
