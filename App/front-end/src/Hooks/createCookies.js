import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function createCookies(data) {

    const userId = data;

    cookies.set('userId', userId, { path: '/' });
    console.log("creating cookie...");
    console.log(cookies.get('userId'));

}