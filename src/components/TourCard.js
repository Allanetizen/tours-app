import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation="3">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/04/14/16/tower-6521842_1280.jpg"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Tower the Eiffel
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="paragraph">
              5 hours
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
export default TourCard;
