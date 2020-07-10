const http = require('https');

/**
 * calling corresponding
 *
 * @param {Object} options is request option to call msg91 server
 * @return {Promise<Object>}
 */
exports.apiCall = async (options, body = null) => {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {

      if (!options.header.authKey) throw new Error('Auth code not available');

      const chunks = []
      res.on('data', (chunk) => {
        chunks.push(chunk)
      });

      res.on('error', (aReason) => {
        reject(aReason)
      })

      res.on('end', () => {
        const body = Buffer.concat(chunks)
        resolve(JSON.parse(body.toString()));
      })
    });
    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

exports.handleResponse = (response, resolve, rejects) => {
  if (response.type === 'error') {
    if (!response.code) {
      response.code = 201
    }
    rejects(response)
  }

  resolve(response)
}