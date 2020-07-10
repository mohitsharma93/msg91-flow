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

      if (!options.header.authkey) return reject({ msg:'Auth code not available', error: true});

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
    req.on('error', function(err) {
      // This is not a "Second reject", just a different sort of failure
      reject(err);
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