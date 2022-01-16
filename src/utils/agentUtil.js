import _ from '@utils/lodashUtil'

const AGENT = {
    SAFARI: 'safari',
    IOS: 'ios',
    ANDROID: 'android',
    CHROME: 'chrome'
}

Object.freeze(AGENT);

/**
 * @todo 예외케이스 더 추가 예정
 */
const getAgent = () => {
    if (_.isUndefined(window) || _.isUndefined(window.navigator)) {
        return ''
    }
    const standalone = window.navigator.standalone;
    const userAgent = window.navigator.userAgent.toLowerCase();
    const safari = /safari/.test(userAgent);
    const ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        if (!standalone && safari) {
            return AGENT.SAFARI;
        } else if (!standalone && !safari) {
            return AGENT.IOS;
        };
    } else if (userAgent.includes('wv')) {
        return AGENT.ANDROID;
    } else {
        return AGENT.CHROME;
    };
    return '';
}

const webviewUtil = {
    getAgent,
};

export default webviewUtil;
