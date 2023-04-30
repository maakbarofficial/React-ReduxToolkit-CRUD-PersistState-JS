import {
  Paper,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent, clearStudent } from "../../redux/features/studentSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  useEffect(() => {
    dispatch(getStudent(params.id));
    return () => {
      dispatch(clearStudent());
    };
    // eslint-disable-next-line
  }, []);

  const student = useSelector((state) => state.student.student);
  const { firstName, lastName, phone, email, address } = student;
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {firstName} {lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {address}
      </Typography>
    </Paper>
  );
};

export default Student;
