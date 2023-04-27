import getUsername from './getUsername';
export let username = '';

export default function setUsername(name) {
    username = name;
    getUsername();
}

