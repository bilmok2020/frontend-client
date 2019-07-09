import axios from 'axios';

//url address of server for fetching data from server
const serverUrl = 'http://192.168.1.56:3000';

/**
 * @param username{String}
 * @param password{String}
 * @returns {Promise} : When promise is resolved, returns JsonWebToken for authentication
 */
export function login(username, password, cb) {
    return axios.post(`${serverUrl}/api/users/login`, {
        username,
        password
    }).then(response => {
        cb(null, response.data);
    }).catch(err => {
        cb(err, null);
    });
}

/**
 * @param token{String} : Jsonwebtoken for authentication.
 * @returns {Promise} : When promise is resolved, returns  
 */
export function getProfile(token, cb) {
    return axios.get(`${serverUrl}/api/users/profile`, {
            headers: {
                'x-access-token': token,
            }
        })
        .then(response => {
            cb(null, response.data)
        })
        .catch(err => {
            cb(err, null)
        });
}

/**
 * @param username{String} : a User's username
 * @returns {Promise} : When promise is resolved, returns a user's **public** data
 * depends on giving username
 */
export function getUser(username) {
    return username
}

/**
 * @param qrString {String} : scanned qf string from camera
 * @param token {String} : jsonwebtoken for authentication
 * @param cb {Function}  : calback function
 */
export function verifyQrCode(qrString, token, cb) {
    axios({
            method: 'post',
            url: `${serverUrl}/api/missions/qrcode`,
            headers: {
                'x-access-token': token || localStorage.token
            },
            data: {
                scannedQrString: qrString
            }
        })
        .then(response => (cb(null, response)))
        .catch(err => (cb(err, null)));
}