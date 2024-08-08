import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid grey",
    margin: "10px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
