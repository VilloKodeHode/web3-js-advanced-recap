import { showPeople } from "./showPeople.js";
import people from "../data/people.json" assert {type: "json"}
import { showModifiedPeople } from "./showModifiedPeople.js";
import { modifiedPeople } from "./modifyData.js";



showPeople(people)
showModifiedPeople(modifiedPeople(people))