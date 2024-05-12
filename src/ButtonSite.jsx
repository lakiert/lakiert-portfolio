export default function ButtonSite({children, link, className}){
    return(
        <button className={className} onClick={() => window.open(`${link}`)}>{children}</button>
    );
}