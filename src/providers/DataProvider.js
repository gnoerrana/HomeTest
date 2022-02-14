/*
 * @Author: Gilang
 * @Date:   2022-02-13 10:56:22
 * @Last Modified by:   Gilang
 * @Last Modified time: 2022-02-15 00:16:29
 */

import { stringify } from "query-string";
import flatten from "lodash/flattenDeep";
import { get, post, put, destroy } from "./ApiClient";

import * as apiServices from "../services";

/**
 * Get new endpoint format from apiServices if possible
 * or fallback to the old format
 *
 * @param {string} resource
 * @param {string} method
 * @param {object} params
 * @return {string}
 */
const getEndpoint = (resource, method, params) => {
	return apiServices[resource][method]({
		...params,
	});
};

const dataProvider = {
	getList: (resource, params) => {
		let queries = {};
		if (params.pagination) {
			const { page, perPage } = params.pagination;
			queries = {
				...queries,
				...{
					limit: perPage,
					page,
				},
			};
		}
		return get(
			`${getEndpoint(resource, "getList", params)}?${stringify(queries)}`
		)
			.then(({ data }) => {
				if (!data.data) {
					const { page, perPage } = params.pagination;
					return {
						current_page: page,
						data: data,
						per_page: perPage,
						total: 10000,
					};
				}

				if (!data.total) {
					return {
						...data,
						total: data.data.length || 0,
					};
				}
				return data;
			})
			.catch(({ response }) => {
				return Promise.reject(response);
			});
	},
	// getOne: (resource, params) => {

	//   return get(`${getEndpoint(resource, 'getOne', params)}`)
	//     .then(({ data }) => {
	//       if (Object.prototype.hasOwnProperty.call(data, 'data')) {
	//         return data;
	//       }
	//       return {
	//         data,
	//       };
	//     })
	//     .catch(({ response }) => {
	//       return Promise.reject(response);
	//     });
	// },
};

const delayedDataProvider = new Proxy(dataProvider, {
	get: (target, name) => (resource, params) =>
		new Promise((resolve) =>
			setTimeout(
				() =>
					resolve(
						dataProvider[name]
							? dataProvider[name](resource, params)
							: null
					),
				1000
			)
		),
});

export default delayedDataProvider;