const { storage } = require("../common")

const saveLogin = 'login'
const saveFirstTime = 'isFirstTime'

export function firstTime() {
    storage.set(saveFirstTime, true)
}

export function containFirstTime() {
    return storage.getBoolean(saveFirstTime)
}

export function setLogin(profile) {
    storage.set(saveLogin, JSON.stringify(profile))
    return containLogin()
}
export function getLogin() {
    return JSON.parse(storage.getString(saveLogin))
}

export function deleteLogin() {
    storage.delete(saveLogin)
    return containLogin()
}

export function containLogin() {
    return storage.contains(saveLogin)
}
