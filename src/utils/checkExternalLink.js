export const checkExternalLink = (text) => {
    const checkHttp = text.indexOf("http");

    return Boolean(checkHttp > -1);
}