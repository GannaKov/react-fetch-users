import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUserById } from "../../services/requests";
import styles from "./Contact.module.css";
import { Card, Stack, CardBody, Heading, Text } from "@chakra-ui/react";

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
    <div className={styles.cardWrp}>
      {user && (
        <>
          <Card maxW="sm" style={{ margin: "0 auto" }}>
            <CardBody>
              {" "}
              <Heading size="md">User&apos;s Contact</Heading>
              <Stack mt="6" spacing="2">
                <Text>{user.email}</Text>
                <Text>{user.phone}</Text>
                <Text>{user.website}</Text>
              </Stack>
            </CardBody>
          </Card>
          {/* <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p> */}
        </>
      )}
    </div>
  );
};

export default Contact;
