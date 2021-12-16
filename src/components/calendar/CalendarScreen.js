import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/CalendarMsj';
import moment from 'moment';
import 'moment/locale/es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

moment.locale('es');
const localizer = momentLocalizer(moment);

const event = [{
    title: 'test',
    start: moment().toDate(),
    end: moment().add(2, 'days').toDate(),
    bgcolor: 'blue',
    user: {
        name: 'joaquin',
        uid: 123
    }
}]

export const CalendarScreen = () => {

    const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClickEvent = (e) => {

    }

    const onSelectEvent = (e) => {

    }

    const onViewEvent = (e) => {
        setlastView(e);
        localStorage.setItem('lastView', e);
    }

    return (
        <div className='calendar-screen'>
            <Navbar />

            <Calendar
                localizer={localizer}
                events={event}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                components={{ event: CalendarEvent }}
                onDoubleClickEvent={onDoubleClickEvent}
                onView={onViewEvent}
                onSelectEvent={onSelectEvent}
                view={lastView}
            />

            <CalendarModal />
        </div>
    )
}
