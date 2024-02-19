/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`${user.id}`}>
            <>
              <img
                src="https://fakeimg.pl/50x50/e681cd/f2e9e9?text=User&font=lobster"
                alt={user.name}
              />
              <p> {user.name}</p>
            </>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
