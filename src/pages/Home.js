import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import countries from "../data.json";
import { Typography } from "@mui/material";

const Home = () => (
  <div className="App">
    
    <Container
      sx={{
        marginY: 5,
      }}
    >
      {countries.map((country) => (
        <>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top Tour Destinations in {country.name}
          </Typography>
          <Grid container spacing={3}>
            {country.tours.map((tour, index) => (
              <TourCard tour={tour} key={index} />
            ))}
          </Grid>
        </>
      ))}
    </Container>
  </div>
);
export default Home;
