import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/CalendarMsj';
import moment from 'moment';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { openModal } from '../../actions/ModalActions';
import { useDispatch, useSelector } from 'react-redux';
import { setEditEvent, setNewItem } from '../../actions/CalendarActions';

moment.locale('es');
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');
    const { notes } = useSelector(state => state.calendarReducer);
    const dispatch = useDispatch();

    const onDoubleClickEvent = (e) => {

    }

    const onSelectEvent = (e) => {
        dispatch(setEditEvent(e));
        dispatch(openModal());
    }

    const onSelectSpot = (e) => {
        dispatch(setNewItem());
        dispatch(openModal());
    }

    const onViewEvent = (e) => {
        setlastView(e);
        localStorage.setItem('lastView', e);
    }

    return (
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                selectable
                localizer={localizer}
                events={notes}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                components={{ event: CalendarEvent }}
                onDoubleClickEvent={onDoubleClickEvent}
                onView={onViewEvent}
                onSelectEvent={onSelectEvent}
                onSelectSlot={onSelectSpot}
                view={lastView}
            />

            <CalendarModal />
        </div>
    )
}
