import axios from 'axios';

export function getGistForks(gistId){
    return axios.get('https://api.github.com/gists/'+gistId+'/forks')
}
