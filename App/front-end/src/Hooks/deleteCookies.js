import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function deleteCookies() {
    cookies.remove('userId', { path: '/' });
    console.warn("deleting cookie...     " + cookies.get('userId'));
}
