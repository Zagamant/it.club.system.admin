import {
    CREATE,
    DELETE,
    DELETE_MANY,
    fetchUtils,
    GET_LIST,
    GET_MANY,
    GET_MANY_REFERENCE,
    GET_ONE,
    UPDATE,
    UPDATE_MANY,
} from 'react-admin';
import axios from 'axios';
import { authHeader } from '../../helpers';

/**
 * Maps react-admin queries to a REST API implemented
 *
 * @example
 * GET_LIST     => GET http://my.api.url/posts?page=0&pageSize=10
 * GET_ONE      => GET http://my.api.url/posts/123
 * GET_MANY     => GET http://my.api.url/posts?id=1234&id=5678
 * UPDATE       => PUT http://my.api.url/posts/123
 * CREATE       => POST http://my.api.url/posts
 * DELETE       => DELETE http://my.api.url/posts/123
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
    /**
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    const convertDataRequestToHTTP = (type, resource, params) => {
        const options = {};
        options.headers = authHeader();
        switch (type) {
            case GET_LIST: {
                const { page, perPage } = params.pagination;
                options.url = `${apiUrl}/${resource}?page=${page}&pageSize=${perPage}`;
                options.method = 'GET';
                break;
            }
            case GET_ONE: {
                options.url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'GET';
                break;
            }
            case GET_MANY: {
                JSON.stringify({ id: params.ids });
                let idStr = '';
                params.ids.map((id) => idStr + `id=${id}`);
                options.url = `${apiUrl}/${resource}?${idStr}}`;
                options.method = 'GET';
                break;
            }
            case GET_MANY_REFERENCE: {
                const { page, perPage } = params.pagination;
                options.url = `${apiUrl}/${resource}?page=${page}&pageSize=${perPage}`;
                break;
            }
            case UPDATE:
                options.url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'PUT';
                options.data = params.data;
                break;
            case CREATE:
                options.url = `${apiUrl}/${resource}`;
                options.method = 'POST';
                options.data = params.data;
                break;
            case DELETE:
                options.url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'DELETE';
                break;
            default:
                throw new Error(`Unsupported fetch action type ${type}`);
        }
        return { options };
    };

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} Data response
     */
    const convertHTTPResponse = (response, type, resource, params) => {
        const json = response.data;
        switch (type) {
            case GET_LIST:
            case GET_MANY_REFERENCE:
                if (!json.hasOwnProperty('length')) {
                    throw new Error(
                        'The numberOfElements property must be must be present in the Json response'
                    );
                }
                return {
                    data: json,
                    total: parseInt(json.length, 10),
                };
            case CREATE:
                return { data: { ...params.data, id: 0 } };
            default:
                return { data: json };
        }
    };

    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a data response
     */
    return (type, resource, params) => {
        // simple-rest doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
        if (type === UPDATE_MANY) {
            const myOptions = {};
            myOptions.headers = authHeader();
            myOptions.method = 'PUT';
            return Promise.all(
                params.ids.map((id) => {
                    myOptions.data = params.data;
                    return axios(myOptions);
                })
            ).then((responses) => ({
                data: responses.map((response) => response.data),
            }));
        }
        // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
        if (type === DELETE_MANY) {
            const myOptions = {};
            myOptions.headers = authHeader();
            myOptions.method = 'DELETE';
            return Promise.all(
                params.ids.map((id) => {
                    myOptions.url = `${apiUrl}/${resource}/${id}`;
                    return axios(myOptions);
                })
            ).then((responses) => ({
                data: responses.map((response) => response.data),
            }));
        }

        const { options } = convertDataRequestToHTTP(type, resource, params);
        return axios(options).then((response) =>
            convertHTTPResponse(response, type, resource, params)
        );
    };
};
