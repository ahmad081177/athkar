const AthkarFile = 'static/data/'// 'https://raw.githubusercontent.com/ahmad081177/athkar/28fe106f648d03e1dd583e6bbabcdb8fcd743c25/data/'
export const AthkarMainFile = 'athkar'

export const getThikirAsync = async (thikir) => {
    let ret = "";
    try {
        const fname = AthkarFile + thikir + '.json'
        let resp = await fetch(fname);
        if (resp.ok) {
            resp = await resp.json();
            if (resp)
                ret = resp;
        }
    } catch (err) {
        console.log(err)
    }
    return ret;
}