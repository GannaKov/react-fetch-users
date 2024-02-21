/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = ({ handleGoBackClick }) => {
  return (
  

    <Button
      style={{ marginBottom: "2rem" }}
      onClick={handleGoBackClick}
      colorScheme="pink"
      variant="solid"
    >
      <FaArrowLeft style={{ marginRight: "0.5rem" }} />
      Go Back
    </Button>
  );
};

export default GoBack;
