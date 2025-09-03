import { Box, Button, Typography } from '@mui/material'
import CustomInput from '../components/shared/CustomInput'
import { IoMdLogIn } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed In  Successfully", { id: "login" });
      navigate("/chat");
    } catch (error) {
      console.log(error);

      toast.error("Signed In  Failed", { id: "login" });
    }
  }

  return (
    <Box width={"100%"} height={"100%"}
      className="flex flex-1" >
      <Box sx={{ padding: 8, mt: 8, display: { md: "flex", sm: "none", xs: "none" } }}
      >
        <img src="/robot.png"
          alt="Robot"
          style={{ width: "400px" }}
          className='reflect' />
      </Box>
      <Box className="flex 
      justify-items-center
      items-center p-16
      sm:p-45
      ml-auto  mt-16
      md:mt-8 sm:mt-4
      ">
        <form
          onSubmit={handleSubmit}
          className='
        m-auto p-8
        shadow-2xl
        hover:shadow-cyan-500/90
        rounded-lg'>
          <Box className="flex flex-col
          justify-items-center
          " >
            <Typography
              variant='h4'
              className="p-2 text-center
              font-semibold" >
              Login
            </Typography>
            <CustomInput type="email" name="email" label='Email' />
            <CustomInput type="password" name="password" label="Password" />
            <Button
              type='submit'
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "400px",
                borderRadius: "10px",
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black"
                }
              }}
              endIcon={<IoMdLogIn />}> Login</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
};

export default Login;