const envUtil = {
    getEnvByKey
};

function getEnvByKey(key) {
    if (process === undefined || process === null) {
        throw new Error('process 존재하지 않음.');
    }

    if (process.env === undefined || process.env === null) {
        throw new Error('process.env 존재하지 않음.');
    }

    if (key === undefined || key === null || key === "") {
        return null;
    }

    if (process.env[key] === undefined) {
        throw new Error(`"process.env.${key}" 존재하지 않음.`);
    }
    
    return process.env[key];
}

export default envUtil;