/**
 * handleCookie.set()
 * 参数：key, value => 单独设置
 * 参数：object => 批量设置
 * 
 * handleCookie.get()
 * 参数：key => 单独获取
 * 参数：array => 批量获取
 * 参数：空 => 获取全部
 * 
 * handleCookie.remove()
 * 参数：key => 单独移除
 * 参数：array => 批量移除
 * 参数：空 => 移除全部
 */
const handleCookie = (function () {
  let params;

  function set(param1, param2) {
    if (typeof param1 === 'string') setOne(param1, param2);
    if (typeof param2 === 'undefined') setBatch(param1);
  }

  function setOne(key, value) {
    document.cookie = `${key}=${encodeURIComponent(value)};expires=${new Date(Date.now() + 2592000000)}`;
  }

  function setBatch(obj) {
    Object.keys(obj).forEach(key => setOne(key, obj[key]));
  }

  function get(param) {
    params = new URLSearchParams(document.cookie.split('; ').join('&'));
    if (typeof param === 'string') return getOne(param);
    if (Array.isArray(param)) return getBatch(param);
    if (typeof param === 'undefined') return getAll();
  }

  function getOne(key) {
    return params.get(key);
  }

  function getBatch(ary) {
    const tempObj = {};
    ary.forEach(key => tempObj[key] = getOne(key));
    return tempObj;
  }

  function getAll() {
    const tempAry = [];
    for (const key of params.keys()) {
      tempAry.push(key);
    }
    return getBatch(tempAry);
  }

  function remove(param) {
    params = new URLSearchParams(document.cookie.split('; ').join('&'));
    if (typeof param === 'string') removeOne(param);
    if (Array.isArray(param)) removeBatch(param);
    if (typeof param === 'undefined') removeAll();
  }

  function removeOne(key) {
    document.cookie = `${key}=;expires=${new Date(0)}`;
  }

  function removeBatch(ary) {
    ary.forEach(key => removeOne(key));
  }

  function removeAll() {
    const tempAry = [];
    for (const key of params.keys()) {
      tempAry.push(key);
    }
    removeBatch(tempAry);
  }

  return { set, get, remove };
})();
