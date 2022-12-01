import { useEffect} from 'react';
import { MailOutline, Phone, LocationOn, Delete, Edit } from '@mui/icons-material';
import {  Paper } from '@mui/material'
import {Link} from 'react-router-dom';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Education from './education/Education';
import Language from './language/Language';
import React from 'react';
//import profilePhoto from '../../images/photo.jpg';
import "./resume.css";
import {useSelector, useDispatch} from "react-redux";
import {getSummary, deleteSummary} from "../../redux/apiCalls/summaryApiCalls";
import { getPerson, deletePerson } from '../../redux/apiCalls/personApiCalls';
import { getSkill } from '../../redux/apiCalls/skillApiCalls';
import { getExperiences } from '../../redux/apiCalls/experienceApiCalls';
import { getEducation } from '../../redux/apiCalls/educationApiCalls';
import { getLanguage } from '../../redux/apiCalls/languageApiCalls';
import { setCurrentId } from '../../redux/reducers/person';
import { setCurrentSummaryId } from '../../redux/reducers/summary';

const Resume = React.forwardRef((props, ref) => {
   const summary = useSelector((state) =>state.summary.summary);
   const person = useSelector((state) => state.person.person);
   const skill = useSelector((state) => state.skill.skill);
   const education = useSelector((state) => state.education.education);
   const experience = useSelector((state)=> state.experience.experience);
   const language = useSelector((state) => state.language.language);
   
   const summaryCurrentId = useSelector((state) => state.summary.currentId);
   const personCurrentId = useSelector((state) => state.person.currentId);
   const skillCurrentId = useSelector((state) => state.skill.currentId);
   const educationCurrentId = useSelector((state) => state.education.currentId);
   const experienceCurrentId = useSelector((state) => state.experience.currentId);
   const languageCurrentId = useSelector((state) => state.language.currentId);

   const user =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

   const dispatch = useDispatch();
   
   useEffect(() => {
       getSummary(dispatch);
       getPerson(dispatch);
       getSkill(dispatch);
       getExperiences(dispatch);
       getEducation(dispatch);
       getLanguage(dispatch);
   }, [dispatch,summaryCurrentId, personCurrentId, skillCurrentId, educationCurrentId, experienceCurrentId, languageCurrentId, user]);

    const deletePersonHandler= (id) => {
        deletePerson(id, dispatch);
    }


    const deleteSummaryHandler = (id) => {
        deleteSummary(id, dispatch);
    }

    const setPersonId = (id) => {
        dispatch(setCurrentId(id));
    }

    const setSummaryId = (id) => {
        dispatch(setCurrentSummaryId(id));
    }

    return (
        <div className='resumePage'>
            <Paper ref={ref} elevation={2} className="paper">
                <div id="resume">
                <div className="resumeContainer" >
                    {person.length !==0 && person.map((per) => (<div className="profilePart">
                        <div className="leftSide">
                            <img className="profilePhoto" alt="profilePicture" src={per.profileImg}/>
                        </div>
                        <div className="rightSide profileRightSide">
                            <div>
                                <h1 className="name">{`${per.firstName} ${per.lastName}`}</h1>
                                <ul className="contactList">
                                    <li>
                                        <span ><Phone className="icon"/></span>
                                        <span className="text">{per.phoneNumber}</span>
                                    </li>
                                    <li>
                                        <span ><MailOutline className="icon" /></span>
                                        <span className="text">{per.email}</span>
                                    </li>
                                    <li>
                                        <span ><LocationOn className="icon"/></span>
                                        <span className="text">{`${per.city}, ${per.country}`}</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="profileIcon">
                                    <Delete className="deleteIcon" fontSize="small" onClick={() => deletePersonHandler(per._id)} />
                                    <Link to ="/profile" className="editLink"><Edit className="editIcon" fontSize="small" onClick={() => setPersonId(per._id)}/></Link>
                                </div>
                            </div>
                        </div>
                    </div>))}
                    {summary.length !==0 && summary.map((sum) => (<div className="summaryPart">
                        <div className='leftSide'>
                            <h1 className="summaryTitle">Professional Summary</h1>
                        </div>
                        <div className='rightSide summaryRightSide'>
                            <div>
                                <h3 className='profession'>{sum.professionalTitle}</h3>
                                <p className="summaryDesc">{sum.professionalSummary}</p>
                            </div>
                            <div className="summaryIcon">
                                    <Delete className="deleteIcon" fontSize="small"  onClick= {() => deleteSummaryHandler(sum._id)}/>
                                    <Link to ="/summary" className="editLink"><Edit className="editIcon" fontSize="small" onClick={() => setSummaryId(sum._id)}/></Link>
                            </div>
                        </div>
                    </div>))}
                    {skill.length !== 0 && (<div className="skillPart">
                        <div className='leftSide leftSideSkill'>
                            <h1 className="summaryTitle">Skill</h1>
                        </div>
                        <div className='rightSide'>
                            <Skill />
                        </div>
                    </div>)}
                    {experience.length !==0 && (<div className="workPart">
                        <div className='leftSide'>
                            <h1 className="summaryTitle experienceTitle">Work History</h1>
                        </div>
                        <div className='rightSide'>
                            <Experience />
                        </div>
                    </div>)}
                    {education.length !==0 && (<div className="educationPart">
                        <div className='leftSide'>
                            <h1 className="summaryTitle">Education</h1>
                        </div>
                        <div className='rightSide'>
                            <Education />
                        </div>
                    </div>)}
                    {language.length !==0 && <div className="languagePart">
                        <div className='leftSide'>
                            <h1 className="summaryTitle">Language</h1>
                        </div>
                        <div className='rightSide'>
                            <Language/> 
                        </div>
                    </div>}
                </div>
                </div>
            </Paper>
        </div>
    )
});

export default Resume;
