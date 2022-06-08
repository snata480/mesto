export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject("Error");
    }

    getInitialCards() { 
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
        .then(this._handleResponse);
    }

    

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
                method: "GET",
                headers: this._headers,
            })
            .then(this._handleResponse);
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then(this._handleResponse);
    }

    addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
        .then(this._handleResponse);
    }


    /*     setAvatar(avatarLink) {
        return fetch(`${this._url}/users/me/avatar`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatarLink
                })
            })
            .then(this._checkResponse);
    } */


/*
    likeCard(cardId, isLiked) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
                method: isLiked ? "DELETE" : "PUT",
                headers: this._headers,
            })
            .then(this._checkResponse);
    }

        likeCard(id) {
        return fetch(`${this._url}/cards/like/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._key,
            },
        })
            .then((res) => this._handlePromise(res))
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
                method: "DELETE",
                headers: this._headers,
            })
            .then(this._checkResponse);
    } */
}