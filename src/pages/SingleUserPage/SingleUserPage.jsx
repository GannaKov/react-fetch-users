import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSingleUserById } from "../../services/requests";
import GoBack from "../../components/GoBackBtn/GoBack";

const SingleUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getSingleUserById(id)
      .then((res) => {
        setUser(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  function handleGoBackClick() {
    navigate("/users");
  }
  //const { username, email, address, phone, website, company } = user;
  return (
    <div>
      <GoBack handleGoBackClick={handleGoBackClick} />
      {loading && <p>Loading....</p>}
      {user && (
        <>
          <img
            src="https://fakeimg.pl/100x100/81e697/ffffff?text=User&font=lobster"
            alt={user.name}
          />
          <p>{user.name}</p>
          <p>{user.username}</p>
          <p>{user.company.name}</p>
          <ul>
            <li>
              <Link to="address">Address</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default SingleUserPage;
