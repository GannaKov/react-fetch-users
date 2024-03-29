/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./UsersList.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

const UsersList = ({ users }) => {
  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {users.map(({ id, name, username }) => (
        <Link to={`${id}`} key={id} className={styles.userCardLink}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              // maxW={{ base: "100%", sm: "100px" }}
              objectFit="content"
              src="https://fakeimg.pl/100x100/e681cd/f2e9e9?text=User&font=lobster"
              alt={name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3" style={{ width: "100%" }}>
              <CardBody>
                <Heading size="md"> User {id}</Heading>

                <Text>{name}</Text>
              </CardBody>
              <Divider />
              <CardFooter style={{ justifyContent: "center" }}>
                <Text>{username}</Text>
              </CardFooter>
            </Stack>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default UsersList;
{
  /*  <Link to={`${user.id}`} key={user.id}>
         <>
              <img
                src="https://fakeimg.pl/50x50/e681cd/f2e9e9?text=User&font=lobster"
                alt={user.name}
              />
              <p> {user.name}</p>
            </> */
}

// </Link>
