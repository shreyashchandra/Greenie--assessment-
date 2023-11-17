import "./AddUser.css";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div>
      <h3>Add User</h3>

      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
      </form>
      <hr />
    </div>
  );
};

export default AddUser;
