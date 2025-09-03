import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import red from '@mui/material/colors/red';
import { useAuth } from '../context/AuthContext';
import ChatItem from '../components/chat/ChatItem';
import { IoMdSend } from 'react-icons/io';
import { useRef, useState } from 'react';
import { sendChatRequest } from '../helpers/api-communicator';

type Message ={
  role: "user" | string;
  content: string;
} 
const Chat = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  let userName = '';
  if (auth?.user?.name) {
    const nameParts = auth.user.name.split(' ');
    const firstNameInitial = nameParts[0]?.[0] || '';
    const lastNameInitial = nameParts[1]?.[0] || '';
    userName = `${firstNameInitial}${lastNameInitial}`;
  }

  const [chatMessages, setChatMessage ] = useState<Message[]>([]);
  
  const handleSubmit = async() =>{
    
    const content = inputRef.current?.value as string;
    if(inputRef && inputRef.current){
      inputRef.current.value = '';
    }
    const newMessage: Message = {role: "user", content};
    setChatMessage((prev)=>[...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessage([...chatData.chats]);
  };
  //
  
  return (
    <Box className="flex 
    flex-1 
    w-full 
    h-full 
    mt-3 
    gap-2" >
      <Box className=" w-[30%]"
      sx={{ display:{md:"flex", xs:"none", sm:"none", lg:"flex" } }} >
        <Box className="flex w-full rounded-2xl mx-3 flex-col"
          sx={{
            bgcolor: "rgb(17,29,39)",
            width: "100%",
            flexDirection: "column",
            height: "60vh"
          }}>
          <Avatar className='mx-auto my-2 bg-white black font-bold'>
            {userName}
          </Avatar>
          <Typography
            sx={{ fontFamily: "work sans", mx: "auto" }}>
            Talking to Vartalaap
          </Typography>
          <Typography
            className='my-8 p-8'
            sx={{ fontFamily: "work sans", mx: "auto", overflow: "scroll" }}>
            Hey User! 
            I am VARTALAAP developed by Aryan Singh. Here, you can clear your any kind of doubts regarding your programs or problems.
          </Typography>
          <Button className='w-[50%]
          p-2
            font-bold
            rounded-xl'
            sx={{
              color: "white",
              mx: "auto",
              my: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              }
            }} > Clear Conversation </Button>
        </Box>
      </Box>
      <Box className="p-3 flex px-1 flex-col"
        sx={{
          width: "80%",
          flex: { md: 0.8, xs: 1, sm: 1, lg:0.95 }
        }}>
        <Typography sx={{ mx: "auto", fontSize: "40px", fontWeight: "600" }}
          className='text-center mb-2 text-white' >
          Vartalaap
        </Typography>
        <Box sx={{
          overflow: "scroll",
          overflowX: "hidden",
          overflowY: "auto",
          scrollBehavior: "smooth",
          }}
          className="w-full p-4 h-[60vh] mx-auto rounded-2xl flex flex-col"
          >
            
          {chatMessages.map((chat, index) => (
          //@ts-expect-error/ban-ts-comment
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <div className='w-full flex m-auto p-2 rounded-xl' 
         style={{backgroundColor:"rgb(17,27,39)"}}>
          <input ref={inputRef} type='text' className='bg-transparent
          w-full 
          p-5 
          border-none
          outline-none
          text-white text-xl'  />
          {/* <IconButton onClick={handleSubmit} className=" bg-blue-600"
          sx={{color:"white", ml:"auto", background:"#00fffc" }}
          > <IoMdSend/>  </IconButton> */}
          <IconButton
  onClick={handleSubmit}
  sx={{
    color: "white",
    ml: "auto",
    backgroundColor: "#00fffc",
    '&:hover': {
      backgroundColor: "#00e6d6",
    },
    '&:active': {
      backgroundColor: "#00b3aa", 
    },
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", 
    transition: "background-color 0.3s, box-shadow 0.3s", 
    borderRadius: "50%",
    padding: "10px", 
    position: "relative",
    right: "-10px",
  }}
>
  <IoMdSend />
</IconButton>

        </div>
      </Box>
    </Box>
  )
}

export default Chat;