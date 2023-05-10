import styled from "styled-components";
import submitService from "../helpers/submitService";

export default function SubmitButton({ checkList, currentTemplate }) {
  const allChecked = checkList.every((option) => option.checked === true);

  // console.log(checkList);

  const handleCLick = (event) => {
    submitService.addSubmit(
      { currentTemplate } + "checklist is submitted at " + new Date()
    );
  };

  return (
    <Wrapper>
      <Button onClick={handleCLick} disabled={!allChecked}>
        Submit
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
  max-height: 40px;
  background-color: hsl(0deg 0% 85%);
  border-radius: 10px;
  display: flex;
  margin-left: 50px;
`;

const Button = styled.button``;
