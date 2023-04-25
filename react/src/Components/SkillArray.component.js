import axios from "axios";
import React, {useState, useEffect} from 'react' ;

function SkillArray() {
    const [skills, setSkills] = useState([]) ;
    useEffect(()=>{fetchSkill();} , [skills]);

    const fetchSkill = ()=> {
        axios
            .get('http://localhost:5000/competences/')
            .then(res => {
                console.log(res.data); 
                setSkills(res);})
            .catch(error => {console.log(error)});

            return ( 
                console.log("helllo")
            );
            
            }}

export default SkillArray ;