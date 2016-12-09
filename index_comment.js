'use strict';

/**
 * 给定键值对或对象，得到格式化字符串
 * @param  {string} template 要格式化的字符串
 * @param  {object} args     用以替换的对象
 * @return {function / string}          函数或格式化的字符串
 */
module.exports = function(template, args) {

    // 当不传递第二个参数时，返回缓存的转换函数
    if (!args) {
        return interpolate.bind(null, template);
    }

    // 当传递第二个参数时，返回格式化的字符串
    return interpolate(template, args);
};

// 用于格式化字符串
function interpolate(template, args) {

    // 正则表达式匹配形容'{a}'这样的模式
    // 巧妙利用replace方法第二个参数是函数的情况，每匹配一个，就执行一次函数，函数的返回值用以替换匹配的字符
    // match为当前匹配的字符，如'{a}',key为命名匹配得到的字符，如‘a’
    return template.replace(/{([^}]*)}/g, function(match, key) {

        // 若key在args中，则替换；反之，返回原值，不替换
        return key in args ? args[key] : match;
    });
}


// 参考
// https://www.npmjs.com/package/formatted-string 太差
// https://www.npmjs.com/package/string-format-obj 很好