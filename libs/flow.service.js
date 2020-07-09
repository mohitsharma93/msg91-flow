const { apiCall, handleResponse } = require('./api.call');

class flowService {
	/**
	 * Creates a new flow instance to handle OTP message handling of the MSG91 services
	 * @param {String} authKey Authentication key
	 */
	constructor(authKey) {
		this.authKey = authKey;
	}

	/**
	 * Creates a new get flow instance to get flow templates MSG91 services
	 * @param {String}  Authentication key
	 */
	async getFlow(flowId = '') {
		return new Promise(async (resolve, reject) => {
			try {
				const options = {
					method: 'GET',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flows/' + flowId,
					header: {
						authKey: this.authKey,
					},
				};
				const response = await apiCall(options);
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}

	async addFlow(postData) {
		return new Promise(async (resolve, reject) => {
			try {
				const options = {
					method: 'POST',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flow/',
					header: {
						'Content-Type': 'application/json',
						'Content-Length': data.length,
						authKey: this.authKey,
					},
				};
				const response = await apiCall(options, JSON.stringify(postData));
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}

	async updateFlow(flowId, updatedData) {
		return new Promise(async (resolve, reject) => {
			try {
				const options = {
					method: 'POST',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flows/'+ flowId,
					header: {
						'Content-Type': 'application/json',
						'Content-Length': data.length,
						authKey: this.authKey,
					},
				};
				const response = await apiCall(options, JSON.stringify(updatedData));
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = flowService;
