export default class DateUtil {
  /**
   * 格式化
   */
  static getDateString = function(date) {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  };
}

/**
 * date中关于后端传递的“-”的bug
 * @param time
 */
Date.prototype.fix = function(time) {
  return new Date(
    typeof time === "string" && time.indexOf("-") !== -1
      ? time.split("-").join("/")
      : time
  );
};

/**
 * 格式化
 * @param  format
 * new Date().format("yyyy-MM-dd hh:mm:ss")
 */
Date.prototype.format = function(format) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

/**
 * 计算延后天数
 * @param {Number} d 天数
 */
Date.prototype.addDays = function(d) {
  this.setDate(this.getDate() + d);
  return this;
};

/**
 * 计算延后周
 * @param {Number} w
 */
Date.prototype.addWeeks = function(w) {
  this.addDays(w * 7);
  return this;
};

/**
 * 计算延后月
 * @param {Number} m
 */
Date.prototype.addMonths = function(m) {
  this.setMonth(this.getMonth() + m);
  return this;
};
