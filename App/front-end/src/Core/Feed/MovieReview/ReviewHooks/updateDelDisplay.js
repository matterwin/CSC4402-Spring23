import getDelDisplay from './getDelDisplay';
export let showDiv = false;

export default function updateDelDisplay(flag) {
    showDiv = flag;
    getDelDisplay();
}
