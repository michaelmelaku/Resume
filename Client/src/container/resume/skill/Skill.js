import "./skill.css";
import {useEffect} from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deleteSkill, getSkill } from "../../../redux/apiCalls/skillApiCalls";
import {Delete, Edit} from '@mui/icons-material';
import {setCurrentId} from "../../../redux/reducers/skill";

const Skill = () => {
    const skills = useSelector((state) => state.skill.skill);
    const dispatch = useDispatch();

    useEffect(() => {
        getSkill(dispatch);
    }, [ dispatch]);

    const handleDelete = (id) => {
       deleteSkill(id, dispatch);
    }

    const setSkillId = (id) => {
        dispatch(setCurrentId(id));
    }

    const middleIndex = Math.ceil(skills.length /2);

    const firstHalf = skills.slice().splice(0, middleIndex);
    const secondHalf = skills.slice().splice(-middleIndex);

    return (
        <>
            <div className="skillDivision">
                <div>
                    {firstHalf.map((skill,index) => (
                        <ul className="skillList" key={index}>
                            <li className="skillListItem">
                            <div className="skillItem">
                                {skill.skill} 
                            </div>
                            <div className="icons">
                                <Delete className="deleteIcon" fontSize="small" onClick={() => handleDelete(skill._id)} />
                                <Link to ="/skill" className="editLink"><Edit className="editIcon" fontSize="small" onClick={() => setSkillId(skill._id)} /></Link>
                            </div>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="secondHalf">
                    {secondHalf.map((skill,index) => (
                        <ul className="skillList" key={index}>
                            <li className="skillListItem">
                            <div className="skillItem">
                                {skill.skill} 
                            </div>
                            <div className="icons">
                                <Delete className="deleteIcon" fontSize="small" onClick={() => handleDelete(skill._id)} />
                                <Link to ="/skill" className="editLink"><Edit onClick={() => setSkillId(skill._id)} className="editIcon" fontSize="small" /></Link>
                            </div>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skill;
