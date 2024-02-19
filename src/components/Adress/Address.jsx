import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserById } from "../../services/requests";

const Address = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getSingleUserById(id)
      .then((res) => {
        setUser(res.address);
        console.log(res);
      })
      .catch((error) => console.log(error.message));
  }, [id]);
  return (
    <div>
      {user && (
        <>
          <p>Address</p>
          <p>
            {user.street} {user.suite}
          </p>
          <p>{user.city}</p>
          <p>{user.zipcode}</p>
        </>
      )}
    </div>
  );
};

export default Address;
