import { Select, Button, MenuItem, InputLabel } from '@mui/material';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react'
import Input from '../../container/Input'
import "./language.css";
import { addLanguage, updateLanguage } from '../../redux/apiCalls/languageApiCalls';
import { resetCurrentId } from '../../redux/reducers/language';


const Language = () => {
    const [language, setLanguage] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.language.currentId);
    const languageToUpdate = useSelector((state) => currentId ? state.language.language.find((lang) => lang._id ===currentId): null);

    useEffect(() => {
        if(languageToUpdate) setLanguage(languageToUpdate);
    }, [languageToUpdate]);
    

    const handleChange = (e) => {
        setLanguage((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId !== 0){
            updateLanguage(currentId, language, dispatch);
        }
        else {
            addLanguage(language, dispatch);
        }
        clear();
    }

    const clear = () => {
        dispatch(resetCurrentId());
        setLanguage({
            language: "",
            level: ""
        });
    }


    return (
        <div className='container'>
            <div >
                <h2 className="header">
                    Tell us about your education
                </h2>
                <p className="subtitle">
                    Include every school, even if you're still there or didn't graduate.
                </p>
            </div>
            <div item container xs={10} spacing={1}>
            <Input type="text" name="language" value={language.language} handleChange={handleChange} label="Language" autoFocus/>
               <div item xs={12} style={{width: '100%'}} sx={{mt: -3}}>
                <InputLabel  style={{width: '20%'}}  id="demo-simple-select-label">Level</InputLabel>
                <Select style={{width: '100%'}} className="languageLevel"  id="demo-simple-select" name="level" label="Age" onChange={handleChange}>
                        <MenuItem value={100}>Native</MenuItem>
                        <MenuItem value={75}>Advanced</MenuItem>
                        <MenuItem value={50}>Intermediate</MenuItem>
                        <MenuItem value={25}>Beginner</MenuItem>
                </Select>
               </div>
                <div item xs={12} className="buttons">
                        <Button className="saveButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained" onClick={handleSubmit}>{currentId ? 'Update': 'Add'}</Button>
                        <Link to="/language" className="nextLink">
                            <Button className="nextButton" sx={{mt: 1, mx: "auto"}} type="button" variant="contained">Finish</Button>
                        </Link>
                </div>
            </div>
        </div>  
        
    )
}

export default Language;
