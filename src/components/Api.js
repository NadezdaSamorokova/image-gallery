export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _handleResponse(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getCards() {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            return res.json();
        });
    }

    addNewCard(data) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then((res) => this._handleResponse(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,   
        }).then((res) => this._handleResponse(res));
    }

    editProfile(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.nikname,
                about: data.occupation,
            }),
        }).then((res) => this._handleResponse(res));
    }

    editAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then((res) => this._handleResponse(res));
    }

    addCardLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    deleteCardLike(cardId) {
        return fetch(`${this._url}cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }
}