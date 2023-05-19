// import keycloak
import Keycloak from 'keycloak-connect'

let _keycloak

const keycloakConfig = {
    clientId: 'Webshop',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080',
    realm: 'test-app',
    credentials: {
        secret: 'IEKn6oX4nLCtxw0LbkebsuqYx8AOC4w3'
    }
}

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!")
        return _keycloak
    } else {
        console.log("Initializing Keycloak...")
        let keycloak = new Keycloak({store: true}, keycloakConfig)
        _keycloak = keycloak
        return keycloak
    }
}

function getKeycloak() {
    if (!_keycloak) {
        console.error("Keycloak has not been initialized. Please called init first.")
    }
    return _keycloak
}

export {initKeycloak, getKeycloak}