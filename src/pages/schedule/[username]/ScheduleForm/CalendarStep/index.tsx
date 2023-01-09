import { Calendar } from "../../../../../components/Calendar";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {

    const isDateSelected = false;

    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar /> 

            {isDateSelected && (
                <TimePicker>
                    <TimePickerHeader>sexta-feira <span>13 de janeiro</span></TimePickerHeader>

                    <TimePickerList>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>09:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>12:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>13:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>19:00h</TimePickerItem>
                        <TimePickerItem>08:00h</TimePickerItem>
                        <TimePickerItem>23:00h</TimePickerItem>
                    </TimePickerList>
                </TimePicker>
            )}
        </Container>
    )
}