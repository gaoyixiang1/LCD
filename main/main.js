module.exports = function main(num) {
    var nums = [
        ['._.', '|.|', '|_|'],
        ['...', '..|', '..|'],
        ['._.', '._|', '|_.'],
        ['._.', '._|', '._|'],
        ['...', '|_|', '..|'],
        ['._.', '|_.', '._|'],
        ['._.', '|_.', '|_|'],
        ['._.', '..|', '..|'],
        ['._.', '|_|', '|_|'],
        ['._.', '|_|', '..|']
    ];
    var i, j;
    var out = []
    var result = []
    var s = ''
    //确定位数
    var newListLength = num.length;
    //创建新数组
    var newList = [];
    for (i = 0; i < newListLength; i++) {
        var index = num.charAt(i);
        newList.push(nums[index])
    }
    //转换数组
    for (i = 0; i < 3; i++) {
        for (j = 0; j < newListLength; j++) {
            out.push(newList[j][i])
        }
    }
    //分割数组
    for (i = 0; i < out.length; i += newListLength) {
        result.push(out.slice(i, i + newListLength))
    }
    //拼接
    for (i = 0; i < result.length; i++) {
        result[i] = result[i].join(" ");
        s += result[i] + '\n'
    }


    return s
};