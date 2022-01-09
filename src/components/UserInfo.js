export default class UserInfo {
    constructor({ profileName, profileOccupation }) {
        this._name = profileName;
        this._occupation = profileOccupation;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            occupation: this._occupation.textContent
        }
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._occupation.textContent = userInfo.occupation;
    }
}