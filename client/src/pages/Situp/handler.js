import axios from 'axios';
export const SubmitSitup = (sen1, sen2, sen3, sen4) => {
    return axios.get(`http://e806-34-83-243-49.ngrok.io/situp?sen1=${sen1}&sen2=${sen2}&sen3=${sen3}&sen4=${sen4}`)
}