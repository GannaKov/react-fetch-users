import { useEffect, useState } from "react";
import { getUsers } from "../../services/requests";
import UsersList from "../../components/UserList/UsersList";
import styles from "./UsersPage.module.css";
import { Spinner } from "@chakra-ui/react";

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
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="pink.300"
          size="xl"
        />
      )}
      {users && <UsersList users={users} />}
    </div>
  );
};

export default UsersPage;
