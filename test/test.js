const nock = require('nock');
const assert = require('assert');
const { apiCall } = require('../libs/api.call');
const flowService = require('../index').flowService;

describe('flowService', () => {
  it('create new instance', () => {
    const nObject = new flowService()
    assert(nObject instanceof flowService)
  })

  describe('constructor', () => {
    it('pass const value auht key', () => {
      const authKey = new flowService('277839AnXJt4zrZs615f05696bP1')
      assert.strictEqual(authKey.authKey, '277839AnXJt4zrZs615f05696bP1');
    })
  })

  describe('apiCall', () => {
    before(() => {
      this.nock = nock('https://api.msg91.com');
      console.log(this.nock);
    })

    it('call api', (done) => {
      const jsonResponse = { nothing: [] }
      this.nock.get(/.*/).reply(201, jsonResponse)
        let flowId = '5f056c9bd6fc05357f62c9f';
        const options = {
            method: 'GET',
            hostname: 'api.msg91.com',
            port: null,
            path: '/api/v5/flows/' + flowId,
            headers: {
                'content-type': 'application/json',
                'authkey': '277839AnXJt4zrZs615f05696bP1'
            }
        }

      apiCall(options)
        .then((response) => {
          assert.notDeepStrictEqual(response, null)
          done()
          console.log(response);
        })
        .catch((error) => {
          assert.notDeepStrictEqual(error, null)
          done()
        })
    })
  })
});