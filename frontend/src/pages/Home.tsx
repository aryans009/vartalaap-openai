import { Box } from '@mui/material'
import TypingAnime from '../components/typer/TypingAnime';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box className="w-full h-full" >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnime />
        </Box>
        <img
          className="rotate"
          src="vartalaap.png"
          alt="gpt"
          style={{ width: "200px", margin: "auto" }}
        />
      </Box>
      <Box sx={{ paddingTop: "30px", display: "flex", mx: "auto" }}>
        <img
          src="/code.png"
          alt="chatbot"
          style={{
            display: "flex",
            margin: "auto",
            width: "60%",
            borderRadius: 20,
            boxShadow: "-5px -5px 105px #64f3d5",
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
          }}
        />
      </Box>
      <Footer />
    </Box>
  )
}

export default Home;