// INPUT : YYYY-MM-DD or undefined
// OUTPUT : ex. May 3, 2023
export const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
};

// INPUT :
// OUTPUT : Array of [today,nextSevenDay] in YYYY-MM-DD
export const getSevenDayRange = () => {
    const today = new Date();

    const seven = new Date(Date.now() + 7 * 24 * 3600 * 1000);

    const todayStr = today.toISOString().slice(0, 10);
    const sevenStr = seven.toISOString().slice(0, 10);

    return [todayStr, sevenStr];
};
