export const getAlAdanDataAsync = async (d, m, y, lat, longt) => {
    return new Promise(async (resolve, reject) => {
        const url = `https://api.aladhan.com/v1/timings/${d}-${m}-${y}?latitude=${lat}&longitude=${longt}&method=2`;
        try {
            let res = await fetch(url);
            if (res.ok) {
                res = await res.json();
                if (res.code === 200) {
                    return resolve(res.data)
                }
            }
        } catch (e) {
            return reject(e);
        }
    });
}

/**
 * 
 * @returns Current date: [day, month, year]
 */
export const getCurrentDate = () => {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    return [d, m, y]
}

/**
 * @param data result of calling `aladan_api`
 * @returns [eng-date, arab-date] as strings
 */
export const getDates = (data) => {
    let g = "", h = "";
    if (data && data.date) {
        try {
            if (data.date.gregorian) {
                if (data.date.gregorian.weekday && data.date.gregorian.weekday.en)
                    h = data.date.gregorian.weekday.en + " ";
                h += data.date.gregorian.date;
            }
        } catch { }

        try {
            if (data.date.hijri) {

                if (data.date.hijri.weekday && data.date.hijri.weekday.ar)
                    g = data.date.hijri.weekday.ar + " ";
                g += data.date.hijri.day + " " + data.date.hijri.month.ar + " " + data.date.hijri.year
            }
        }
        catch { }
    }
    return [g, h]
}