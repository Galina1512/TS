const log = <T>(val: T) => {
    console.log(val);
    return val;
}

log<string>('строка');

function log2<T>(val: T): T {
    console.log(val);
    return val;
}

log2<boolean>(!5);