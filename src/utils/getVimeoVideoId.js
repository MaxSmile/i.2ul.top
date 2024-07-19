export default function getVimeoVideoId(url) {
    const regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    const match = url.match(regExp);
    if (match) {
        return match[2]
    } else {
        console.log("not a vimeo url");
    }
}