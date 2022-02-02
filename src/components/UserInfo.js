export default class UserInfo {
    constructor({ profileName, profileOccupation, profileAvatar }) {
        this._nikname = profileName;
        this._occupation = profileOccupation;
        this._avatar = profileAvatar;
    }

    getUserInfo() {
        return {
            nikname: this._nikname.textContent,
            occupation: this._occupation.textContent
        }
    }

    setUserInfo(userInfo) {
        this._nikname.textContent = userInfo.name;
        this._occupation.textContent = userInfo.about;
        this._avatar.src = userInfo.avatar;
    }
}