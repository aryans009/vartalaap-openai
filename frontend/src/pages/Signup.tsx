import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material'
import CustomInput from '../components/shared/CustomInput'
import { IoIosLogIn } from 'react-icons/io';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, 
  // [auth]
  );
  return (
    <Box width={"100%"} height={"100%"}
      className="flex flex-1" >
      <Box className="flex 
      justify-items-center
      items-center p-16
      m-auto  mt-16
      sm:p-45
      
      ">
        <form
          onSubmit={handleSubmit}
          className='
        m-auto p-8
        shadow-2xl
        shadow-cyan-500/90
        rounded-lg'>
          <Box className="flex flex-col
          justify-items-center
          " >
            <Typography
              variant='h4'
              className="p-2 text-center
              font-semibold" >
              Create Vartalaap account
            </Typography>
            <CustomInput type="name" name="name" label='Name' />
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
              endIcon={<IoIosLogIn />}> SignUp</Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Signup;