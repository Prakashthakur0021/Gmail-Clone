import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add"
import InboxIcon from "@material-ui/icons/Inbox"
import StarIcon from "@material-ui/icons/Star"
import SidebarOption from '../SidebarOption/SidebarOption'
import { AccessTime, Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice'

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
             {/* Error can be in sendMessage function  */}
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" onClick={() => dispatch(openSendMessage())}>Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={25} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={25}  />
            <SidebarOption Icon={AccessTime} title="Snoozed" number={25}  />
            <SidebarOption Icon={LabelImportant} title="Important" number={25}  />
            <SidebarOption Icon={NearMe} title="Sent" number={25}  />
            <SidebarOption Icon={Note} title="Drafts" number={25}  /> 
            <SidebarOption Icon={ExpandMore} title="More" number={25}  /> 

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person/>
                    </IconButton>
                    <IconButton>
                        <Duo/>
                    </IconButton>
                    <IconButton>
                        <Phone/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
} 

export default Sidebar
