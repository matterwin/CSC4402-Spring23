import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function readCookies() {
    console.log("reading cookie...");
    return cookies.get('userId');
}