import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function readCookies() {
    return cookies.get('userId');
}
