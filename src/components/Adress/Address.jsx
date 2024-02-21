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
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  if (!user) {
    return null;
  }

  const { street, suite, city, zipcode } = user;
  return (
    <div className={styles.cardWrp}>
      {user && (
        <>
          <Card maxW="sm" style={{ margin: "0 auto" }}>
            <CardBody>
              <Heading size="md">User&apos;s Address</Heading>{" "}
              <Stack mt="6" spacing="2">
                <Text>
                  {street} {suite}
                </Text>
                <Text>{city}</Text>
                <Text>{zipcode}</Text>
              </Stack>
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
};

export default Address;
