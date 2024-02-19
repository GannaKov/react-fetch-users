/* eslint-disable react/prop-types */
const GoBack = ({ handleGoBackClick }) => {
  return (
    <button type="button" onClick={handleGoBackClick}>
      &larr;Go Back
    </button>
  );
};

export default GoBack;
