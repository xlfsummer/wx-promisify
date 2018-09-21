/**
 * @template TOpt, TRes
 * @param {(option: TOpt & { success: (result: TRes) => any }) => any} wxAsyncFunction
 * @returns {(option: TOpt) => Promise<TRes>}
 */
function promisify(wxAsyncFunction) {
    return function promisifiedFunction(option) {
        if (!option) option = {};
        let originSucess = option.success || (_ => _);
        let originFail = option.fail || (_ => _);
        return new Promise(function (resolve, reject) {
            option.success = data => {
                originSucess(data);
                resolve(data);
            };
            option.fail = err => {
                originFail(err);
                reject(err);
            };
            wxAsyncFunction.call(this, option);
        });
    }
}