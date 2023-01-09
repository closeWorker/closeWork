import { iListComments, iListServiceHome } from "../../context/type";

export interface iPropsProfileMoreInfo {
  service: iListServiceHome;
}

export interface iPropsDescriptionMoreInfo {
  service: iListServiceHome;
  listComments: iListComments[];
}
