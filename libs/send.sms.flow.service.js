const { apiCall, handleResponse } = require('./api.call');

class sendSmsFlowService {
  /**
	 * Creates a new flow instance to handle OTP message handling of the MSG91 services
	 * @param {String} authKey Authentication key
	 */
	constructor(authKey) {
		this.authKey = authKey;
  }
  
  /**
	 * Creates a new flow instance to handle OTP message handling of the MSG91 services
	 * @param {String} authKey Authentication key
	 */
	async sendSmsViaFlow(postData) {
		return new Promise(async (resolve, reject) => {
			try {
				const options = {
					method: 'POST',
					hostname: 'test.msg91.com',
					port: null,
					path: '/api/v5/flow/',
					header: {
            'Content-Type': 'application/json',
						'Content-Length': postData.length,
						'authkey': this.authKey,
					},
        };
				const response = await apiCall(options, JSON.stringify(postData));
				handleResponse(response, resolve, reject);
			} catch (error) {
				reject(error);
			}
		});
	}

}

module.exports = sendSmsFlowService;
