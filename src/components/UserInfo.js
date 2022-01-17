export default class UserInfo {
    constructor({ profileName, profileOccupation }) {
        this._nikname = profileName;
        this._occupation = profileOccupation;
    }

    getUserInfo() {
        return {
            nikname: this._nikname.textContent,
            occupation: this._occupation.textContent
        }
    }

    setUserInfo(userInfo) {
        this._nikname.textContent = userInfo.nikname;
        this._occupation.textContent = userInfo.occupation;
    }
}