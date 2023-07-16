import { Base64 } from 'js-base64';

export function verificationCode() {
    return Math.floor(Math.random() * 899999 + 100000);
}


export function encodeInfo(info) {
    return Base64.encode(info);
}

export function deccodeInfo(encode) {
    return Base64.decode(encode);
}