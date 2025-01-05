import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <Backdrop
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)", color: "#484848" }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
