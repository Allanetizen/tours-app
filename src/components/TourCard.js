import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material/";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
      ],
    },
  },
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme} >
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
            <AccessTime
              sx={{
                width: 12.5,
              }}
            />
            <Typography variant="body2" component="paragraph" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating
              name="read-only"
              value={4.5}
              precision="0.5"
              readOnly
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>

            <Typography variant="body3" component="p" marginLeft={1.5}>
              (456 reviews )
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From US $100
            </Typography>
          </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
};
export default TourCard;
