import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'


const TourCard =()=>{
    return (
     <Grid item xs={3}>
     <Paper elevation ="3">
         <img src="https://cdn.pixabay.com/photo/2021/08/04/14/16/tower-6521842_1280.jpg" alt="" className="img" />
     </Paper>
    </Grid>   
)
    
}
export default TourCard