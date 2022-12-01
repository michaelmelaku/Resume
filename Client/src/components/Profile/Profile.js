import {Link} from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@mui/material'
import profilePhoto from "../../images/profile.jpg";
import {addPerson, updatePerson} from "../../redux/apiCalls/personApiCalls";
import Input from '../../container/Input'
import "./profile.css";
import { resetCurrentId } from '../../redux/reducers/person';


const Profile = () => {
    const [person, setPerson] = useState("");
    const dispatch = useDispatch();
    const currentId = useSelector((state) => state.person.currentId);
    const personToUpdate = useSelector((state) => currentId ? state.person.person.find((per) => per._id === currentId): null);

    useEffect(() => {
        if(personToUpdate) setPerson(personToUpdate);
    }, [personToUpdate]);

    // const handleChange = (e) => {
    //     setPerson((prev) => {
    //         return {...prev, [e.target.name]:e.target.value}
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId !== 0) {
            updatePerson(currentId, person, dispatch);
        }
        else {
            addPerson(person, dispatch);
        }
        clear();
    }

    const clear = () => {
        dispatch(resetCurrentId());
        setPerson({
            profileImg: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            city: "",
            country: ""
        });
    }

    return (
        <div className='container'>
            <div>
                <h2 className="header">
                    What’s the best way for employers to contact you?
                </h2>
                <p className="subtitle">
                    We suggest including an email and phone number.
                </p>
            </div>
            <div className="profileContainerSection">
                <div className="profile">
                    <div item>
                        <div className="profileLabel">
                            <img className="profileImage" src={person.profileImg !== null ? person.profileImg : profilePhoto} alt="" />
                        </div>
                        <FileBase  type="file" multiple={false} 
                        onDone={({base64}) => setPerson({...person, profileImg: base64})}/>
                    </div>
                </div>
                <div className="profileInputs">
                    <div>
                        <div className="profileInput">
                            <Input type="text" required name="firstName" value={person.firstName} handleChange={(e) => setPerson({...person, firstName: e.target.value})} half label="Fisrt Name" autoFocus/>
                            <Input type="text" required name="lastName" value={person.lastName} handleChange={(e) => setPerson({...person, lastName: e.target.value})} half label="Last Name" autoFocus/>
                            <Input type="email" required name="email" value={person.email} handleChange={(e) => setPerson({...person, email: e.target.value})}  half label="email" autoFocus/>
                        </div>
                        <div>
                            <Input type="text"   required name="phoneNumber" value={person.phoneNumber} handleChange={(e) => setPerson({...person, phoneNumber: e.target.value})}  half label="Phone Number" autoFocus/>
                            <Input type="text"  name="city" value={person.city} handleChange={(e) => setPerson({...person, city: e.target.value})} half label="City" autoFocus/>
                            <Input type="text"  name="country" value={person.country} handleChange={(e) => setPerson({...person, country: e.target.value})} half label="Country" autoFocus/>
                        </div>
                    </div>
                    

                    <div className="buttons">
                        <Button className="saveButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained" onClick={handleSubmit}>{currentId ? 'Update': 'Add'}</Button>
                        <Link to="/work" className="nextLink">
                            <Button className="nextButton" sx={{mt: 1, mx: "auto"}}  type="button" variant="contained">Next experience</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
