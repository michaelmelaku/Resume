import "./resume.css";
import profileImage from "../../images/photo.jpg";
import {Phone, Email, LocationOn} from "@mui/icons-material";

const Resume1 = () => {
    return (
        <div className="container">
            <div className="left_side">
                <div className="profileText">
                    <div className="imgBx">
                        <img src={profileImage} alt=""/>
                    </div>
                    <h2>Abebe Teshome<br/><span>Web Developer</span></h2>
                </div>
                <div className="contactInfo">
                    <h3 className="title">Contact Info</h3>
                    <ul>
                        <li>
                            <span className="icon"><Phone /></span>
                            <span className="text">+251 927347337</span>
                        </li>
                        <li>
                            <span className="icon"><Email /></span>
                            <span className="text">abeteshe37@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon"><LocationOn /></span>
                            <span className="text">Addis Ababa, Ethiopia</span>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo education">
                    <h3 className="title">Education</h3>
                    <ul>
                        <li>
                            <h5>2010 - 2013</h5>
                            <h4>Bachelor Degree in Computer Engineerring</h4>
                            <h4>Addis Ababa University</h4>
                        </li>
                        <li>
                            <h5>2010 - 2013</h5>
                            <h4>Bachelor Degree in Computer Engineerring</h4>
                            <h4>Addis Ababa University</h4>
                        </li>
                        <li>
                            <h5>2010 - 2013</h5>
                            <h4>Bachelor Degree in Computer Engineerring</h4>
                            <h4>Addis Ababa University</h4>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo language">
                    <h3 className="title">Languages</h3>
                    <ul>
                        <li>
                            <span className="text">Afaan Oromoo</span>
                            <span className="percent">
                                <div style={{width: '95%'}}></div>
                            </span>
                        </li>
                        <li>
                            <span className="text">Amharic</span>
                            <span className="percent">
                                <div style={{width: '85%'}}></div>
                            </span>
                        </li>
                        <li>
                            <span className="text">English</span>
                            <span className="percent">
                                <div style={{width: '75%'}}></div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right_side">
                <div className="about">
                    <h2 class="title2">Profile</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type
                         specimen book. It has survived not only five centuries, 
                         but also the leap into electronic typesetting, remaining 
                         essentially unchanged. It was popularised in the 1960s with 
                         the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus 
                         PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="about experience">
                    <h2 className="title2">Experience</h2>
                    <div className="box">
                        <div className="year_company">
                            <h5>2019 - Present</h5>
                            <h5>Company Name</h5>
                        </div>
                         <div className="text">
                            <h4>Senior Web Developer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2016 - 2019</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Senior Web Developer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2014 - 2016</h5>
                            <h5>Company Name</h5>
                        </div>
                        <div className="text">
                            <h4>Senior Web Developer</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry</p>
                        </div>
                    </div>
                </div>
                <div className="about skills">
                    <h2 className="title2">Professsional Skills</h2>
                    <div className="box">
                        <h4>html</h4>
                        <div className="percent">
                            <div style={{width: "95%"}}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>CSS</h4>
                        <div className="percent">
                            <div style={{width: "95%"}}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>JavaScript</h4>
                        <div className="percent">
                            <div style={{width: "85%"}}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>Java</h4>
                        <div className="percent">
                            <div style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>NodeJS</h4>
                        <div className="percent">
                            <div style={{width: "75%"}}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>ReactJS</h4>
                        <div className="percent">
                            <div style={{width: "85%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="about interest">
                    <h2 className="title2">Interest</h2>
                    <ul>
                        <li>Gaming</li>
                        <li>Reading</li>
                        <li>Traveling</li>
                        <li>Cooking</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume1
