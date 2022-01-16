/**
 * 
 * https://lodash.com/docs/4.17.15
 * 
 * build시 용량이 20kb가 넘기 떄문에 Tree Shaking 적용 위해
 * lodashUtil.js 파일을 따로 추가했습니다.
 * 아래와 같이 import 하면 됩니다.
 * (O) import {isEmpty, isNil} from '@utils/lodashUtil';  
 * (O) import _ from '@utils/lodashUtil';  
 * 
 * (X) import _ from 'lodash-es'; 
 *  
 * lodash 함수가 추가로 필요한경우 lodashUtil.js 파일에 추가해야 합니다.
 * 1. import {추가 함수}
 * 2. const _ = {추가 함수}
 */

import {
    isEmpty,
    isNil,
    isUndefined,
    now,
    isObject,
    isObjectLike,
    uniqueId,
    isString,
    reduce,
    map,
    isEqual,
    has,
    isNull,
    random,


    // 추가함수 위치
} from 'lodash-es';

const _ = {
    isEmpty,
    isNil,
    isUndefined,
    now,
    isObject,
    isObjectLike,
    uniqueId,
    isString,
    reduce,
    map,
    isEqual,
    has,
    isNull,
    random,


    // 추가함수 위치
}

export default _;