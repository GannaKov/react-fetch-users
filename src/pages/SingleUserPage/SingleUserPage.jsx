import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSingleUserById } from "../../services/requests";
import styles from "./SingleUserPage.module.css";
import { Spinner } from "@chakra-ui/react";
import GoBack from "../../components/GoBackBtn/GoBack";
import { Card, Image, Stack, CardBody, Heading, Text } from "@chakra-ui/react";
import noPage from "../../assets/images/no_page.jpg";

const SingleUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isFetch, setIsFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getSingleUserById(id)
      .then((res) => {
        setUser(res);
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false);
        setIsFetch(true);
      });
  }, [id]);

  function handleGoBackClick() {
    navigate("/users");
  }
  //const { username, email, address, phone, website, company } = user;
  return (
    <div className={styles.sectionWrp}>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="pink.300"
          size="lg"
        />
      )}
      <GoBack handleGoBackClick={handleGoBackClick} />
      {isFetch && (
        <>
          {user ? (
            <>
              <div className={styles.cardWrp}>
                <Card maxW="sm" style={{ margin: "0 auto" }} align="center">
                  <CardBody>
                    <Image
                      src="https://fakeimg.pl/200x150/81e697/ffffff?text=User&font=lobster"
                      alt={user.name}
                      borderRadius="lg"
                    />
                    <Heading mt="6" size="md">
                      {user.name}
                    </Heading>{" "}
                    <Stack mt="6" spacing="3">
                      <Text>Username:</Text>
                    </Stack>
                    <Text fontSize="2xl">{user.username}</Text>{" "}
                    <Text>Company:</Text>
                    <Text color="blue.600" fontSize="2xl">
                      {user.company.name}
                    </Text>
                  </CardBody>
                </Card>
              </div>

              <ul className={styles.subNuv}>
                <li>
                  <NavLink
                    to="address"
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${styles.headerNavLink}`
                        : `${styles.headerNavLink}`
                    }
                  >
                    Address
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${styles.headerNavLink}`
                        : `${styles.headerNavLink}`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <Outlet />
            </>
          ) : (
            <img
              src={noPage}
              alt="Page not found"
              className={styles.notFoundImg}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SingleUserPage;
