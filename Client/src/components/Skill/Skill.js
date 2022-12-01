import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Button } from '@mui/material'
import Input from '../../container/Input'
import {Link} from 'react-router-dom';
import { addSkill, updateSkill } from '../../redux/apiCalls/skillApiCalls';
import { resetCurrentId } from '../../redux/reducers/skill';


const Skill = () => {
    const[skill, setSkill] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.skill.currentId);
    const skillToUpdate = useSelector((state) => currentId ? state.skill.skill.find((ski) => ski._id === currentId) : null);
    
    useEffect(() => {
       if(skillToUpdate) setSkill(skillToUpdate);
    }, [skillToUpdate]);
    
    const handleChange = (e) => {
        setSkill(prev => {
            return {...prev, [e.target.name]:e.target.value}
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(currentId !== 0){
            updateSkill(currentId, skill, dispatch);
        }
        else {
            addSkill(skill, dispatch);
        }
        clear();
    }

    const clear = () => {
        dispatch(resetCurrentId());
        setSkill({skill: ""});
    }

    return (
        <div className="container">
            <div>
                <h2 className="header">
                    Next, let’s take care of your skills
                </h2>
                <p className="subtitle">
                    Employers scan skills for relevant keywords.
                </p>
            </div>
            <div >
            <Input type="text" name="skill" value={skill.skill} handleChange={handleChange}  label="Skill" autoFocus/>
                <div className="buttons">
                        <Button onClick={handleClick} className="saveButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">{currentId ? 'Update': 'Add'}</Button>
                        <Link to="/summary" className="nextLink">
                            <Button className="nextButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">Next summary</Button>
                        </Link>
                </div>
            </div>
        </div>  
    )
}

export default Skill;
