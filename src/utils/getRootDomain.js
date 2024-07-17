/***
 * Get Root Domain Name from URL
 * @param url
 * @returns {string}
 */

export default function getRootDomain(url) {
    let rightPeriodIndex, noExtension;
    const withoutHttp = url.replace(/^https?:\/\//, '');
    for (let i = withoutHttp.length - 1; i >= 0; i--) {
        if (withoutHttp[i] === '.') {
            rightPeriodIndex = i;
            noExtension = withoutHttp.substr(0, i);
            break;
        }
    }
    return noExtension.substring(noExtension.lastIndexOf(".") + 1);
}
