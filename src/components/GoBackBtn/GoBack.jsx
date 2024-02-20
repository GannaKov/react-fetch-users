/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = ({ handleGoBackClick }) => {
  return (
    // <button type="button" onClick={handleGoBackClick}>
    //   &larr;Go Back
    // </button>

    <Button
      style={{ marginBottom: "2rem" }}
      onClick={handleGoBackClick}
      // rightIcon={<ArrowForwardIcon />}
      colorScheme="pink"
      variant="solid"
    >
      <FaArrowLeft style={{ marginRight: "0.5rem" }} />
      Go Back
    </Button>
  );
};

export default GoBack;
