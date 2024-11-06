"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotSearchableFields = exports.minutesToTime = exports.timeToMin = exports.slotDuration = void 0;
exports.slotDuration = 60;
// convert time to min
const timeToMin = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * exports.slotDuration + minutes;
};
exports.timeToMin = timeToMin;
// Generate slot time interval with function
const minutesToTime = (minutes) => {
    const hours = Math.floor(minutes / exports.slotDuration)
        .toString()
        .padStart(2, "0");
    const mins = (minutes % exports.slotDuration).toString().padStart(2, "0");
    return `${hours}:${mins}`;
};
exports.minutesToTime = minutesToTime;
exports.slotSearchableFields = ["date", "room"];
