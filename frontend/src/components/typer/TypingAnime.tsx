import { TypeAnimation } from "react-type-animation";

function TypingAnime() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                "Chat With Your Own AI",
                800,
                "Built With OpenAI 🤖",
                800,
                "Your Own Customized Vartalaap..",
                900,
            ]}
            speed={50}
            style={{
                fontSize: "60px",
                color: "white",
                display: "inline-block",
                textShadow: "1px 1px 20px #000",
            }}
            repeat={Infinity}
        />
    );
}

export default TypingAnime;