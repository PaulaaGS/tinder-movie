import { Check, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { Movie } from "../models/MovieModel";
import { Loading } from "./Loading";

interface MovieCardProps {
  movie: Movie;
  isPending?: boolean;
  onClick: (accepted: boolean) => void;
}

export const MovieCard = ({
  movie: { title, rating, imageURL, summary },
  isPending,
  onClick,
}: MovieCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: "345px",
        padding: "20px",
        backgroundColor: "#fafafa",
        color: "#212121",
      }}
    >
      {isPending && <Loading />}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" fontSize={24}>
          {title}
        </Typography>
        <Box>
          <Typography component="legend">Rating: {rating}/10</Typography>
          <Rating
            name="read-only"
            value={rating}
            precision={0.5}
            size="small"
            max={10}
            readOnly
          />
        </Box>
        <img src={imageURL} alt={title} />
        <div>{summary}</div>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingTop: "20px" }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<Check />}
          onClick={() => onClick(true)}
          disabled={isPending}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<Close />}
          onClick={() => onClick(false)}
          disabled={isPending}
        >
          Reject
        </Button>
      </CardActions>
    </Card>
  );
};
