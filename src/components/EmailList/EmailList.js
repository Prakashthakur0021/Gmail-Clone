import React, { useEffect, useState } from 'react'
import { IconButton } from '@material-ui/core'
import { ArrowDropDown, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import Section from '../Section/Section'
import './EmailList.css'
import EmailRow from '../EmailRow/EmailRow'
import { db } from '../../firebase'

function EmailList() {
    const [emails, setEmails] = useState([]);
    
    useEffect(() => {

        db.collection("emails")
            .orderBy("timestamp","desc")
                .onSnapshot((snapshot) => 
                    setEmails(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                )
    }, [])


    return (
            <div className="emailList">
                <div className="emailList__settings">
                    
                    <div className="emailList__settingsLeft">
                        <CheckBoxOutlineBlank />
                        <IconButton>
                            <ArrowDropDown />
                        </IconButton>
                        <IconButton>
                            <Redo />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>

                    <div className="emailList__settingsRight">
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                        <IconButton>
                            <KeyboardHide />
                        </IconButton>
                        <IconButton>
                            <Settings />
                        </IconButton>
                    </div>

                </div>

                <div className="emailList__sections">
                    <Section Icon={Inbox} title="Primary" color="red" selected /> 
                    <Section Icon={People} title="Social" color="#1A72E8"  /> 
                    <Section Icon={LocalOffer} title="Promotions" color="green" /> 
                </div>

                <div className="emailList__list">
                    {emails.map(({id, data: {to,subject,message, timestamp}}) => (
                        
                        <EmailRow 
                            key={id}
                            id={id} 
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()} 
                        />
                    ) )}

                        <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                    <EmailRow 
                            id={1} 
                            title="Firebase Email" 
                            subject="Woo Hoo It worked" 
                            description="This Email is from firebase Congratulation you have learned how to fetch and host project from firebase" 
                            time="5:04am" 
                        />

                    <EmailRow id={1} title="kamlesh" description="first Email first Email first Email fiail firsfk sldfkjsld flks dfkj lsdkj" subject="Job Offer" time="5:04am" />
                
                </div>
            </div>
    )
}

export default EmailList
