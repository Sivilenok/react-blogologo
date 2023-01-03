import { Button } from "components";
import { useNavigate } from "react-router";

export const ArrowButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Button children={""}></Button>
    /*<Button onClick={handleBack}>
      <StyledArrowButton />
    </Button>}*/
  );
};
