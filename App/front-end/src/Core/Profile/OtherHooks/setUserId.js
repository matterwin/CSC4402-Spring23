import getUserId from './getUserId';
export let userId = -1;

export default function setUserId(id) {
    userId = id;
    getUserId();
}

