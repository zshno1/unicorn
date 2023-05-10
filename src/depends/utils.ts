/*
 * 时间戳格式化
 * 参数使用
 * fmt：返回格式(格式自定义)  YYYY-mm-dd HH:MM:SS
 * time 时间戳
 */
export var dateFormat = (fmt, time) => {
    var date = new Date(time);

    if (date.toString().toLowerCase() === 'invalid date') {
        return '-';
    }

    var ret;
    var opt = {
        'Y+': date.getFullYear().toString(),
        // 年
        'm+': (date.getMonth() + 1).toString(),
        // 月
        'd+': date.getDate().toString(),
        // 日
        'H+': date.getHours().toString(),
        // 时
        'M+': date.getMinutes().toString(),
        // 分
        'S+': date.getSeconds().toString(), // 秒
    };

    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart(targetLength, padString) {
            targetLength = targetLength >> 0; //floor if number or convert non-number to 0;

            padString = String(typeof padString !== 'undefined' ? padString : ' ');

            if (this.length > targetLength) {
                return String(this);
            } else {
                targetLength = targetLength - this.length;

                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
                }

                return padString.slice(0, targetLength) + String(this);
            }
        };
    }

    Object.keys(opt).forEach(k => {
        ret = new RegExp('(' + k + ')').exec(fmt);

        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
        }
    });
    return fmt;
};
