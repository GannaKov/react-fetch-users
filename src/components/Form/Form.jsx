/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import {
  Input,
  Button,
  Textarea,
  VStack,
  Box,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import styles from "./Form.module.css";

const Form = ({ setForm }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      // alert(JSON.stringify(values, null, 2));
      const newValues = { ...values };
      setForm(newValues, null, 2);
      values.name = "";
      values.email = "";
      values.message = "";
    },
  });
  return (
    <div className={styles.pageWrp}>
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formik.values.message}
                placeholder="Enter something"
                onChange={formik.handleChange}
              />
            </FormControl>

            <Button type="submit" colorScheme="purple" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
};

export default Form;
