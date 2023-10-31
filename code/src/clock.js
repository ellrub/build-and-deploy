export const getTimeString = (now) => {
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hour}:${minute}:${seconds}`
}

const getNextYearDate = (now) => {
    const endOfYearDate = new Date(0)
    endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1)
    return endOfYearDate;
}

export const getSecondsLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
}

export const getMinutesLeftOfYear = (now) => {
    const startOfNextYear = getNextYearDate(now);
    const startOfNextYearMillis = startOfNextYear.getTime();
    const nowMillis = now.getTime();
    const minutes =  (((startOfNextYearMillis - nowMillis) / 1000) / 60); 
    const formatted = (minutes).toFixed(2).split('.');
    return formatted
}
