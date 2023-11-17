import "./User.css";

const User = ({ id, name, email, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="list">
      <span>{id}</span>
      <span>{name}</span>
      <span>{email}</span>
      <span>
        <button onClick={handleDelete}>delete</button>
      </span>
    </div>
  );
};

export default User;
