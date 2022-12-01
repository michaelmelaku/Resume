import React, {useEffect} from 'react';
import "./language.css";
import {Link} from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguage, deleteLanguage } from '../../../redux/apiCalls/languageApiCalls';
import { setCurrentId } from '../../../redux/reducers/language';


const Language = () => {
    const language = useSelector((state) => state.language.language);
    const dispatch = useDispatch();

    useEffect(() => {
        getLanguage(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteLanguage(id, dispatch);
    }

    const setLanguageId = (id) => {
        dispatch(setCurrentId(id));
    }
    
    return (
        <>
            {language.map((lang,index) => (
                <ul className="languageList" key={index}>
                    <li className="languageListItem">
                     <div className="languageItem">
                        <p>
                            <span>{lang.language}</span>
                            <div className="box">
                                <div style={{width: `${lang.level}%`}}></div>
                            </div>
                        </p>
                     </div>
                     <div className="icons">
                        <Delete className="deleteIcon" fontSize="small" onClick={() => handleDelete(lang._id)} />
                        <Link to ="/language" className="editLink"><Edit className="editIcon" fontSize="small" onClick={() => setLanguageId(lang._id)}/></Link>
                    </div>
                    </li>
                </ul>
            ))}
            
        </>
    )
}

export default Language;


