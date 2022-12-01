import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import  {Button } from '@mui/material'
import Input from '../../container/Input'
import {Link} from 'react-router-dom';
import { addEducation, updateEducation } from '../../redux/apiCalls/educationApiCalls';
import { resetCurrentId } from '../../redux/reducers/education';

const Education = () => {
    const [educations, setEducations] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.education.currentId);
    const educationToUpdate = useSelector((state) => currentId ? state.education.education.find((edu) => edu._id === currentId) : null);

    useEffect(() => {
        if(educationToUpdate) setEducations(educationToUpdate);
    }, [educationToUpdate]);

    const handleChange = (e) => {
        setEducations((prev)=> {
            return {...prev, [e.target.name]: e.target.type==="checkbox" ? e.target.checked : e.target.value}
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(currentId !== 0){
            updateEducation(currentId, educations, dispatch);
        }
        else {
            addEducation(educations, dispatch);
        }
        clear();
    }

    const clear = () => {
        dispatch(resetCurrentId());
        setEducations({field: "", degree: "", schoolName: "", city: "", country: "", startDate: "", endDate: "", stillLearning: false});
    }

    return (
        <div  className='container'>
            <div>
                <h2 className="header">
                    Tell us about your education
                </h2>
                <p className="subtitle">
                    Include every school, even if you're still there or didn't graduate.
                </p>
            </div>
            <div>
                <Input type="text" required name="field"  value={educations.field} handleChange={handleChange} label="Field of study" autoFocus/>
                <div className='educationInput'>
                    <div>
                        <Input type="text" required name="degree"  value={educations.degree} handleChange={handleChange} label="Degree" half />
                        <Input type="text" required name="schoolName" value={educations.schoolName} handleChange={handleChange} half label="School" autoFocus/>
                        <Input type="text" required name="city"  value={educations.city} handleChange={handleChange} half label="city" autoFocus/>
                        
                    </div>
                    <div>
                        <Input type="text" required name="country"  value={educations.country} handleChange={handleChange} half label="country" autoFocus/>
                        <Input type="date" required name="startDate" value={educations.startDate} handleChange={handleChange}  half label="Start Date" autoFocus/>
                        <Input type="date" required name="endDate" value={educations.endDate} handleChange={handleChange}  half label="endDate" autoFocus/>
                    </div>
                </div>
                <div className="checkbox">
                    <div>
                        <input type="checkbox" id="topping" name="stillLearning" onChange={handleChange} checked={educations.stillLearning}/><span>Currently Learning</span>
                    </div>
                </div>
                <div className="buttons">
                        <Button className="saveButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained" onClick={handleClick}>{currentId ? 'Update': 'Add'}</Button>
                        <Link to="/skill" className="nextLink">
                            <Button className="nextButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">Next skill</Button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Education;
