import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function createCookies(data) {

    const userId = data.id;

    cookies.set('userId', userId, { path: '/' });
    // console.log("creating cookie...    " + cookies.get('userId'));

}