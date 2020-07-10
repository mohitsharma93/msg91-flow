class Helper {
  checkSOrO(strOrObj) {
    if (typeof strOrObj === 'object' && strOrObj.constructor === Object) {
        for (const key in strOrObj) {
            if (strOrObj.hasOwnProperty(key)) {
                const element = strOrObj[key];
                strOrObj[key] = this.removeTags(element);
            }
        }
    } else {
        this.removeTags(strOrObj);
    }
    return strOrObj;
  }

  removeTags(str) {
    str = str.toString().trim();
    return str.replace( /(<([^>]+)>)/ig, '');
  }
}

module.exports = Helper;