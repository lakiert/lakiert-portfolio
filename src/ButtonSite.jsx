export default function ButtonSite({text, link}){
    return(
        <button className="btn-site" onClick={() => window.open(`${link}`)}>{text}</button>
    );
}