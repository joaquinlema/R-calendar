import { messages } from "../../helpers/CalendarMsj";

describe('pruebas de calendar msj', () => {

    test('should have this translations', () => {

        const msj = {
            allDay: 'Todo el día',
            previous: '<',
            next: '>',
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            agenda: 'Agenda',
            date: 'Fecha',
            time: 'Hora',
            event: 'Evento',
            noEventsInRange: 'No hay eventos en este rango',
            showMore: total => `+ Ver más (${total})`
        }

        expect(JSON.stringify(msj)).toEqual(JSON.stringify(messages))
    })

})
