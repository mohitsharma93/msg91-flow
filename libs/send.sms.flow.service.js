const { apiCall, handleResponse } = require('./api.call');

class sendSmsFlowService {
  /**
	 * Creates a new flow instance to send sms via flow
	 * 
	 * @param {String} authKey Authentication key
	 */
	constructor(authKey) {
		this.authKey = authKey;
  }
  
  /**
	 * send sms through flow
	 * 
   * @param {object} postData will contain about authkey, senderid, ....
	 * @return {Promise<Object>} 
   **/
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
