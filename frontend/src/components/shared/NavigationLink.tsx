import { Link } from "react-router-dom";

type Props = {
    bg: string;
    to: string;
    text: string;
    textColor: string;
    onClick?:()=>Promise<void>;
}
function NavigationLink(props: Props) {
  return (
    <Link 
    className="
    font-semibold uppercase tracking-wide 
    mr-2.5 ml-2.5 py-2 px-5 
    rounded-lg no-underline"
    to={props.to} 
    style={{background:props.bg, color: props.textColor}}>
        {props.text}
    </Link>
  )
}

export default NavigationLink;