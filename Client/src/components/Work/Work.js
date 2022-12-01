import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addExperiences, updateExperiences } from '../../redux/apiCalls/experienceApiCalls';
import {   Button } from '@mui/material'
import {Link} from 'react-router-dom';
import Input from '../../container/Input'
import { resetCurrentId } from '../../redux/reducers/experience';

const Work = () => {
    const[experience, setExperience] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.experience.currentId);
    const experienceToUpdate = useSelector((state) => currentId ? state.experience.experience.find((exp) => exp._id === currentId): null);

    useEffect(() => {
        if(experienceToUpdate) setExperience(experienceToUpdate);
    }, [experienceToUpdate]);

    const handleChange = (e) => {
        setExperience(prev => {
            return {...prev, [e.target.name]:e.target.type==="checkbox" ? e.target.checked : e.target.value}
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        if(currentId !== 0) {
            updateExperiences(currentId, experience, dispatch);
        }
        else {
            addExperiences(experience, dispatch);
        }
        clear();
    }

    const clear = () => {
        dispatch(resetCurrentId());
        setExperience({
            jobTitle: "",
            employeer: "",
            country: "",
            city: "",
            startDate:"",
            endDate: "",
            stillWorking: false
        });
    }

    return (
        <div className="container">
            <div item sx={{mb: 5}}>
                <h2 className="header">
                    Tell us about your most recent job
                </h2>
                <p className="subtitle">
                    We’ll start there and work backward.
                </p>
            </div>
            <div>
                <div className='workInput'>
                    <div>
                        <Input type="text" required name="jobTitle" value={experience.jobTitle} handleChange={handleChange} half label="Job Title" autoFocus/>
                        <Input type="text" required name="employeer" value={experience.employeer} handleChange={handleChange} label="Employeer" half />
                        <Input type="text" required name="city" value={experience.city} handleChange={handleChange} half label="city" autoFocus/>
                    </div>
                    <div>
                        <Input type="text" required name="country" value={experience.country} handleChange={handleChange} half label="Country" autoFocus/>
                        <Input type="date" required name="startDate" value={experience.startDate} handleChange={handleChange}  half label="Start Date" autoFocus/>
                        <Input type="date" required name="endDate" value={experience.endDate} handleChange={handleChange}  half label="endDate" autoFocus/>
                    </div>
                </div>
                <div className="checkbox">
                    <div>
                        <input type="checkbox" id="topping" name="stillWorking" checked={experience.stillWorking} onChange={handleChange}/><span>Still Working Here</span>
                    </div>
                </div>
                <div className="buttons">
                       <Button onClick={handleClick} className="saveButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">{currentId ? 'Update': 'Add'}</Button>
                        <Link to="/education" className="nextLink">
                            <Button className="nextButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">Next education</Button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Work;
