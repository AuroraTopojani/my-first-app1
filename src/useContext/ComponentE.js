import ComponentF from "./ComponentF";
import { UserContext, CourseContext } from "../App";
import { useContext } from "react";
import styles from "./ComponentE.module.css";
import styled from "styled-components";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const Box = styled.div`
  background: purple;
  color: white;
`;

export default function ComponentE() {
  const user = useContext(UserContext);
  const course = useContext(CourseContext);
  return (
    <div>
      {user} ose {course}
      <div className={styles.box}>PERSHENDETJE</div>
      <Box>INFOTECH</Box>
    </div>
  );
}
