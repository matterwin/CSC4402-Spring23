import getShowPreview from './getShowPreview';
export let showPreview = false;

export default function updateShowPreview(flag) {
    showPreview = flag;
    getShowPreview();
}

