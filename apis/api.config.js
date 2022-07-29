const BASE_URL = 'https://levelup-backend-node.herokuapp.com/'

const ApiConfig = {

    LOGIN: BASE_URL + 'user/login/',
    REGISTER: BASE_URL + 'user/register/',
    CREATE_TODO: BASE_URL + 'todo/createTodo/',
    GET_ALL_TODOS: BASE_URL + 'todo/',
    GET_ALL_USERS: BASE_URL + 'user/allUsers/',

}

export default ApiConfig