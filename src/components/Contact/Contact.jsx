import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserById } from "../../services/requests";

const Contact = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getSingleUserById(id)
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  return (
    <div>
      <p>Contact</p>
      {user && (
        <>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </>
      )}
    </div>
  );
};

export default Contact;
