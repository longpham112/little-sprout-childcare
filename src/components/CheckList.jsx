import { useState } from "react";
import styled from "styled-components";
import NoteButton from "./NoteButton";
import SubmitButton from "./SubmitButton";
import CheckListItem from "./CheckListItem";
import { randomNumber } from "../utils/utils";

/* 
CheckList object = {
  id: number, 
  dateCreated: datetime,
  dateSubmitted: datetime,
  items: CheckListItem[]
}

CheckListItem object = {
  title: string,
  checked: boolean
}


*/

export default function CheckList({ key, template, listName }) {
  const [checkList, setCheckList] = useState(
    template.map((x) => {
      return { ...x, id: randomNumber(), checked: false };
    })
  );

  function handleCheck(item) {
    const nextChecklist = checkList.map((x) => {
      if (x.id === item.id) {
        return { ...x, checked: !x.checked };
      }
      return { ...x };
    });
    setCheckList(nextChecklist);
  }

  return (
    <>
      {/* pass item and handleCheck into CheckListItem */}
      {checkList.map((item) => (
        <CheckListItem key={item.id} item={item} handleCheck={handleCheck} />
      ))}
      <ButtonWrapper>
        <NoteButton />
        <SubmitButton checkList={checkList} listName={listName} />
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`;

const Button = styled.button``;
