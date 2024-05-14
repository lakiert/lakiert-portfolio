import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ListElement({projectName, linkProject, linkGithub}){
    return(
        <div className="list-element">
            <button aria-label={projectName} className={"btn-site"} children={projectName} onClick={() => window.open(linkProject, '_blank')}></button>
            <button aria-label={`github repository of ${projectName}`}className={"btn-github"} children={<FontAwesomeIcon icon={faGithub} /> } onClick={() => window.open(linkGithub, '_blank')}></button>
        </div>
    );
}