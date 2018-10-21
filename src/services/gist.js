import axios from 'axios';

export function getUserGists(username){
    return axios.get('https://api.github.com/users/'+username+'/gists')
}
