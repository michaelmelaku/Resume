import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { deleteExperiences, getExperiences } from '../../../redux/apiCalls/experienceApiCalls';
import "./experience.css";
import { setCurrentId } from '../../../redux/reducers/experience';

const Experience = () => {
    const experience = useSelector((state)=> state.experience.experience);
    const dispatch = useDispatch();

    useEffect(() => {
        getExperiences(dispatch);
    }, [dispatch]);
    

    const handleDelete =(id) => {
        deleteExperiences(id, dispatch);
    }

    const getTime = (date) => {
        return moment.utc(date).format("MMM, YYYY");
    }
    
    const setExperienceId = (id) => {
        dispatch(setCurrentId(id));
    }

    return (
        <>
            {experience.map((exp,index) => (
                <ul className="experienceList" key={index}>
                    <li className="experienceListItem">
                     <div className="experienceItem">
                        <h1>{exp.jobTitle}, <span>{getTime(exp.startDate)} - {exp.stillWorking ? 'Present': getTime(exp.endDate)}</span> </h1>
                        <p>{exp.employeer} - {`${exp.city}, ${exp.country}`}</p>
                     </div>
                     <div className="icons">
                        <Delete className="deleteIcon" fontSize="small" onClick={() => handleDelete(exp._id)} />
                        <Link to ="/work" className="editLink"><Edit className="editIcon" fontSize="small" onClick={() => setExperienceId(exp._id)}/></Link>
                    </div>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default Experience;
