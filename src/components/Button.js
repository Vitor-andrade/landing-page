import './Button.css';
export default function Button(props){
    return <button style={props.style} className={props.className || "whiteButton"}>{props.text}</button>
}