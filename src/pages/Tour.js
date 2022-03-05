import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography'
import Box  from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import  Faqs from "../components/Faqs"
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation";


const Tour =()=> <Container sx={{
 width:900   
}}>
    <Typography variant="h3" component="h1" marginTop ="3" >
        Explore East Africa
    </Typography>
    <Box marginTop ={3} sx={{display: "flex"}} >
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coupons.com.gh%2Fblog%2Fassets%2Fimages%2Feast-africa.jpg&f=1&nofb=1" alt="" height={325 }></img>
         <ImageCollage/>


        
         
         </Box>
         <Box><Typography variant="h6" component="h4" marginTop ="3" >
        About East Africa
    </Typography>
    <Box>



    


    <Typography variant="paragraph" component="p" marginTop ="3" >

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dicta, quaerat iste fugit beatae, quia ullam excepturi eum ipsa quasi, unde voluptate soluta. Velit cupiditate eos quis eum, accusamus enim.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dicta, quaerat iste fugit beatae, quia ullam excepturi eum ipsa quasi, unde voluptate soluta. Velit cupiditate eos quis eum, accusamus enim.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dicta, quaerat iste fugit beatae, quia ullam excepturi eum ipsa quasi, unde voluptate soluta. Velit cupiditate eos quis eum, accusamus enim.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dicta, quaerat iste fugit beatae, quia ullam excepturi eum ipsa quasi, unde voluptate soluta. Velit cupiditate eos quis eum, accusamus enim.

    </Typography>

    <Typography variant="h5" component="h4" marginTop ={3} marginBottom ={2} >
        FAQs
    </Typography>
    </Box>
    <Box marginBottom ="10">
        <Faqs/>
    </Box>
    <Paper sx={{position: 'fixed', bottom:0, left: 0, right:0} }elevation ={3}>
    <BottomNavigation>

    </BottomNavigation>
    </Paper>

</Box>

</Container>


export default Tour
