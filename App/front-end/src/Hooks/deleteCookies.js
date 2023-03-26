import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function deleteCookies(data) {

    cookies.remove('userId', { path: '/' });
    console.log("deleting cookie...");
    console.log(cookies.get('userId'));

}