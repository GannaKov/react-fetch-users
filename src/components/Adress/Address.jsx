import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserById } from "../../services/requests";
import styles from "./Address.module.css";
import { Card, Stack, CardBody, Heading, Text } from "@chakra-ui/react";

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
    <div className={styles.cardWrp}>
      {user && (
        <>
          <Card maxW="sm" style={{ margin: "0 auto" }}>
            <CardBody>
              <Heading size="md">User&apos;s Address</Heading>{" "}
              <Stack mt="6" spacing="2">
                <Text>
                  {user.street} {user.suite}
                </Text>
                <Text>{user.city}</Text>
                <Text>{user.zipcode}</Text>
              </Stack>
            </CardBody>
          </Card>
          {/* <p>Address</p>
          <p>
            {user.street} {user.suite}
          </p>
          <p>{user.city}</p>
          <p>{user.zipcode}</p> */}
        </>
      )}
    </div>
  );
};

export default Address;
