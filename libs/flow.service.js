const { apiCall, handleResponse } = require('./api.call');
const Helper = require('./helper');

class flowService extends Helper {
	/**
	 * Creates a new flow instance to handle OTP message handling of the MSG91 services
	 * @param {String} authKey Authentication key
	 */
	constructor(authKey) {
		super();
		this.authKey = authKey;
	}

	/**
	 * Creates a new get flow instance to get flow templates MSG91 services
	 * @param {String}  Authentication key
	 */
	async getFlow(flowId = '') {
		return new Promise(async (resolve, reject) => {
			try {
				const id = this.checkSOrO(flowId);
				const options = {
					method: 'GET',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flows/' + id,
					header: {
						'authKey': this.authKey,
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
				let data = this.checkSOrO(postData);
				const options = {
					method: 'POST',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flow/',
					header: {
						'Content-Type': 'application/json',
						'Content-Length': data.length,
						'authKey': this.authKey,
					},
				};
				const response = await apiCall(options, JSON.stringify(data));
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}

	async updateFlow(flowId, updatedData) {
		return new Promise(async (resolve, reject) => {
			try {
				let id = this.checkSOrO(flowId)
				let data = this.checkSOrO(updatedData);
				const options = {
					method: 'POST',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flows/'+ id,
					header: {
						'Content-Type': 'application/json',
						'Content-Length': data.length,
						'authKey': this.authKey,
					},
				};
				const response = await apiCall(options, JSON.stringify(data));
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}
}

module.exports = flowService;
