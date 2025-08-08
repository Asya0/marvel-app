
class MarvelServices {
    _apiBase = 'https://marvel-server-zeta.vercel.app/';
    _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';

    getResource = async (url) =>  {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could't fetch ${url}, status: ${res.status}`)
        }
        return await res.json(); 
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=5&${this._apiKey}`)
    }
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`)
    }
}
export default MarvelServices