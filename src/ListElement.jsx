import ButtonSite from "./ButtonSite";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ListElement({projectName, linkProject, linkGithub}){
    return(
        <div className="list-element">
            <ButtonSite className={"btn-site"} children={projectName} onClick={() => window.open(`${linkProject}`)}></ButtonSite>
            <ButtonSite className={"btn-github"} children={<FontAwesomeIcon icon={faGithub} /> } onClick={() => window.open(`${linkGithub}`)}></ButtonSite>
        </div>
    );
}