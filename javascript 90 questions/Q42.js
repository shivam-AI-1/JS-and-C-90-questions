

function eventsConflict(event1, event2) {

    if (event1[0] < event2[1] && event2[0] < event1[1]) {
        return true;
    } else {
        return false; 
}
}

console.log(eventsConflict([1, 5], [4, 8]));
console.log(eventsConflict([1, 5], [5, 8])); 


