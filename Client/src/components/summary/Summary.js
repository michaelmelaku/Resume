import { useEffect, useState } from 'react';
import {  TextareaAutosize, Button } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Input from '../../container/Input';
import { addSummary, updateSummary } from '../../redux/apiCalls/summaryApiCalls';
import { resetCurrentId } from '../../redux/reducers/summary';

const Summary = () => {
    const [summary, setSummary] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.summary.currentId);
    const summaryToUpdate = useSelector((state) => currentId ? state.summary.summary.find((sum) => sum._id === currentId) : null);
    

    useEffect(() => {
       if(summaryToUpdate) setSummary(summaryToUpdate);
       
    }, [summaryToUpdate]);


    const handleChange = (e) => {
        setSummary(prev => {
            return {...prev, [e.target.name]:e.target.value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId !==0) {
            updateSummary(currentId, summary, dispatch);
        }
        else {
            addSummary(summary, dispatch);
        }
        clear();
    }

    const clear = () => {
        dispatch(resetCurrentId());
        setSummary({
            prefessonalTitle: "",
            prefessonalSummary: ""
        });
    }
    

    return (
        <div className='container'>
            <div>
                <h2 className="header">
                    Tell us about your education
                </h2>
                <p className="subtitle">
                    Include every school, even if you're still there or didn't graduate.
                </p>
            </div>
            <div >
                <Input type="text" name="professionalTitle" value={summary.prefessonalTitle} handleChange={handleChange}  label="Title" autoFocus/>
                <div>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={7}
                                name="professionalSummary"
                                value={summary.prefessonalSummary}
                                onChange={handleChange}
                                placeholder="About your description"
                                style={{ width: '100%'}}
                            />
                </div>
                <div  className="buttons">
                        <Button onClick={handleSubmit} className="saveButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">{currentId ? 'Update': 'Add'}</Button>
                        <Link to="/language" className="nextLink">
                            <Button className="nextButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">Next language</Button>
                        </Link>
                </div>
            </div>
        </div>  
        
    )
}

export default Summary;
