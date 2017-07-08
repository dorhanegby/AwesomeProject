var api = {
    getGames() {
        var url = 'https://api.famobi.com/feed';
        return fetch(url).then((res) => res.json());
    }
};

module.exports = api;