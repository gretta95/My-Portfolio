import {JSX} from "react";



export interface ISubSection {
    title?: string,
    link?: string,
    icon?: JSX.Element,
    years?:string,
    where?:string,
    profession?: string

}

export  interface IPersonalDataFirstPartItem {
    section?: string,
    icon?:JSX.Element,
    subSections?: ISubSection[],


}

