const event = {
    eventname: "Workshop KSM Android",
    date: "2024-10-10",
    attendees: ["Valtrizt", "Billy"],
};


function addAttendees(event, newParticipants) {
    const { eventname, date, attendees } = event;
    
    
    const updatedevent = {
        eventname,
        date,
        attendees: [...attendees, ...newParticipants] 
    };
    
    return updatedevent;
}

const newparticipants = ["Arkha", "Tino"];
const updatedevent = addAttendees(event, newparticipants);

console.log(updatedevent);
