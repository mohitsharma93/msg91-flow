# msg91-flow
This is used to handle msg91 apis such as create flow, get flow, update flow and send sms by flow.

## How to implement 

Install node module package in your project

```npm
npm install msg91-flow --save
```

## Get Flow

use the below code snippet for get flow 

```javascript
const flowService = require('msg91-sdk').flowService;
const flow = new flowService("AUTH_KEY");
```
now you can use any of flow method after initialize class

get flow by flow id

```javascript
flow.getFlow(flowId).then(() => {
//Handle success result
}).catch(() => {
//Handle failure result
})
```
add flow 

```javascript
flow.addFlow(postData).then(() => {
//Handle success result
}).catch(() => {
//Handle failure result
})
```
Update Flow

```javascript
flow.updateFlow(flowId, updateData).then(() => {
//Handle success result
}).catch(() => {
//Handle failure result
})
```

## Send SMS Through Flow

Sending sms with flow 

for  data [check doc](https://docs.msg91.com/collection/msg91-api-integration/5/send-sms-via-flow---bulk/T29N6CRT)

```javascript
const sendSmsFlowService = require('msg91-sdk').sendSmsFlowService;
const sendSms = new sendSmsService("AUTH_KEY").sendSmsFlowService;

sendSms.sendSmsViaFlow(data).then(() => {
//Handle success result
}).catch(() => {
//Handle failure result
})
```

## License
[MIT License](https://opensource.org/licenses/MIT)
```licsene
Copyright (c) 2020 Mohit Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

