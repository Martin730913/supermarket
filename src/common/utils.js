export function debounce(fun,delay){
				/* 防抖函数 */
				let timer=null;
				return function(...args){
					if(timer){
						clearTimeout(timer);
					}
					timer=setTimeout(()=>{
						fun.apply(this,args)
					},delay)
				}
			}

// 时间格式化
function padLeftZero(str) {
	//不足两位则补齐
  return ("00" + str).substr(str.length);
}
export function formatDate(date, fmt) {
  // 获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
	//2. 获取
	//M+->正则表达式规则,表示匹配一个或多个M
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }

  return fmt;
}