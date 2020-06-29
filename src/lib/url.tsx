export function getUrl(name: string) {
    return name.toLowerCase().replace(/ /g,"-");
}