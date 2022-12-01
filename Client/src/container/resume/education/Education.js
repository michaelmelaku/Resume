import React, { useEffect} from 'react';
import "./education.css";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteEducation, getEducation } from '../../../redux/apiCalls/educationApiCalls';
import { Delete, Edit } from '@mui/icons-material';
import moment from 'moment';
import { setCurrentId } from '../../../redux/reducers/education';

const Education = () => {
    const educations = useSelector((state) => state.education.education);
    const dispatch = useDispatch();


    useEffect(() => {
        getEducation(dispatch);
    }, [dispatch]);
    
    const handleDelete = (id) => {
        deleteEducation(id, dispatch);
    };

    const getTime = (date) => {
        return moment.utc(date).format("MMM, YYYY");
    }

    const setEducationId = (id) => {
        dispatch(setCurrentId(id));
    }

    return (
        <>
            {educations.map((edu,index) => (
                <ul className="educationList" key={index}>
                    <li className="educationListItem">
                     <div className="educationItem">
                        <h1>{edu.degree} in {edu.field}, <span>{getTime(edu.startDate)} -  {edu.stillLearning ? 'Present': getTime(edu.endDate)}</span></h1>
                        <p>{edu.schoolName}- {edu.city}</p> 
                     </div>
                     <div className="icons">
                        <Delete className="deleteIcon" fontSize="small" onClick={() => handleDelete(edu._id)} />
                        <Link to ="/education" className="editLink"><Edit className="editIcon" fontSize="small" onClick={()=>setEducationId(edu._id)}/></Link>
                    </div>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default Education
