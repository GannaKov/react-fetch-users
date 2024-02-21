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
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  if (!user) {
    return null;
  }

  const { email, phone, website } = user;
  return (
    <div className={styles.cardWrp}>
      {user && (
        <>
          <Card maxW="sm" style={{ margin: "0 auto" }}>
            <CardBody>
              <Heading size="md">User&apos;s Contact</Heading>
              <Stack mt="6" spacing="2">
                <Text>{email}</Text>
                <Text>{phone}</Text>
                <Text>{website}</Text>
              </Stack>
            </CardBody>
          </Card>
        </>
      )}
    </div>
  );
};

export default Contact;
