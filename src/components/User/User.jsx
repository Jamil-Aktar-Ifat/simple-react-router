
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
    </div>
  );
};

export default User;
