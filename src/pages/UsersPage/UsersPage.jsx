import { useEffect, useState } from "react";
import { getUsers } from "../../services/requests";
import UsersList from "../../components/UserList/UsersList";
import styles from "./UsersPage.module.css";

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
    <div className={styles.listWrp}>
      {loading && <p>Loading....</p>}
      {users && <UsersList users={users} />}
    </div>
  );
};

export default UsersPage;
