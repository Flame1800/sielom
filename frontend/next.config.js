
const API_URL = process.env.NODE_ENV === 'development' ? "http://193.168.48.37:1337" : "http://193.168.48.37:1337"

module.exports = {
    env: {
        API_HOST_DEV: "http://localhost:1337/api",
        HOST_DEV: "http://localhost:1337",
        API_URL
    }
}