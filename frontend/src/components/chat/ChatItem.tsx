import { Avatar, Box, Typography } from "@mui/material";

const useAuth = () => ({ user: { name: "Aryan Singh" } });
// ------------------------------

function extractCodeFromString(message: string) {
  if (message && message.includes("```")) {
    return message.split("```").filter(block => block.trim() !== "");
  }
  return null;
}

function isCodeBlock(str: string) {
    if(!str) return false;
    const codeIndicators = ["=", ";", "[", "]", "{", "}", "#", "//", "const ", "let ", "var ", "import ", "function "];
    return codeIndicators.some(indicator => str.includes(indicator));
}

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const safeContent = typeof content === 'string' ? content : '';
  const messageBlocks = extractCodeFromString(safeContent);
  const auth = useAuth();
  let userName = "";

  if (auth?.user?.name) {
    const nameParts = auth.user.name.split(" ");
    const firstNameInitial = nameParts[0]?.[0] || "";
    const lastNameInitial = nameParts.length > 1 ? nameParts[1]?.[0] || "" : "";
    userName = `${firstNameInitial}${lastNameInitial}`.toUpperCase();
  }
  return role === "assistant" ? (
    <Box
      className="flex p-2 my-2 gap-2"
      sx={{ bgcolor: "#004d5612", borderRadius: 2, alignItems: 'flex-start' }}
    >
      <Avatar sx={{ ml: 0, width: 30, height: 30 }}>
         {/* Using an inline SVG for the logo to avoid external file dependencies */}
         <svg width="30" height="30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#004d56" />
            <text x="50" y="68" fontSize="40" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">V</text>
        </svg>
      </Avatar>
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        {!messageBlocks ? (
          <Typography sx={{ fontSize: "20px", whiteSpace: "pre-wrap" }}>{safeContent}</Typography>
        ) : (
          messageBlocks.map((block, index) =>
            isCodeBlock(block) ? (
              <Box
                component="pre"
                key={index}
                sx={{
                  bgcolor: "#1e1e1e",
                  color: "#d4d4d4",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  overflowX: "auto",
                  fontFamily: "monospace",
                  fontSize: "16px",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                  my: 1,
                }}
              >
                <code>{block}</code>
              </Box>
            ) : (
              <Typography sx={{ fontSize: "20px", whiteSpace: "pre-wrap" }} key={index}>
                {block}
              </Typography>
            )
          )
        )}
      </Box>
    </Box>
  ) : (
    <Box
      className="flex p-2 my-2 gap-2"
      sx={{ bgcolor: "#004d56", borderRadius: 2, alignItems: 'center' }}
    >
      <Avatar sx={{ ml: 0, bgcolor: "black", color: "white", width: 30, height: 30, fontSize: '1rem' }}>
        {userName}
      </Avatar>
      <Box>
        <Typography sx={{ color: "white", fontSize: "20px", whiteSpace: "pre-wrap" }}>
          {safeContent}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;

