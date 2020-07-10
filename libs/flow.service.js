const { apiCall, handleResponse } = require('./api.call');
const Helper = require('./helper');

class flowService extends Helper {
	/**
	 * Creates a new flow instance.
	 * 
	 * @param {String} authKey Authentication key
	 */
	constructor(authKey) {
		super();
		this.authKey = authKey;
	}

	/**
	 * get flow by passing flow id.
	 * 
   * @param {string} flowId
	 * @return {Promise<Object>} 
   **/
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
						'authkey': this.authKey,
					},
				};

				const response = await apiCall(options);
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * add flow
	 * 
   * @param {object} postData data to be add
	 * @return {Promise<Object>} 
   **/
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
						'authkey': this.authKey,
					},
				};
				const response = await apiCall(options, JSON.stringify(data));
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}

	/**
	 * update flow
	 * @param {string} flowId flow id 
   * @param {object} updatedData updated data
	 * @return {Promise<Object>} 
   **/
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
						'authkey': this.authKey,
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
