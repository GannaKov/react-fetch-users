import { useEffect, useState } from "react";
import { getUsers } from "../../components/services/requests";

const UsersPage = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((res) => setUsers(res))
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
