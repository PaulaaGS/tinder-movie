import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <Backdrop
      sx={{
        backgroundColor: "#e0e0e080",
        color: "#212121",
        zIndex: 100,
      }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
