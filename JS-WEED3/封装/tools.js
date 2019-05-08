
//单例模式 封装
let tools = (function () {
    //单位数补零
    function toDouble(n) {
        n = n.toString().padStart(2, '0');
        return n
    }
    //求和
    function sumNum(arr, attr) {
        let num = 0;
        if (attr) { //如果有属性
            arr = arr.map(e => e[attr])
        }
        arr.forEach(item => {
            num += item;
        });
        return num
    }
    //倒计时
    // function countDown(time) {
    //     let tarTime = new Date(time); //Date.now(time);
    //     let timer = null;
    //     timer = setInterval(() => {
    //         let nowTime = new Date(); //Date.now();
    //         let diffTime = (tarTime - nowTime) / 1000;
    //         if (diffTime <= 0) {
    //             clearInterval(timer);
    //             return;
    //         }
    //         let days = Math.floor(diffTime/60/60/24);
    //         diffTime %= 60*60*24;
    //         let hours = Math.floor(diffTime/60/60);
    //         diffTime %= 60*60;
    //         let minutes = Math.floor(diffTime/60);
    //         let seconds = Math.floor(diffTime%60);
    //         let time = toDouble(days) +"天"+ toDouble(hours) +':'+ toDouble(minutes) + ':'+ toDouble(seconds);
    //     },1000)
    // }


    function countDown(str, callback) {
        let newTime = new Date(str);
        let timer = null;

        timer = setInterval(() => {
            let oldTime = new Date;
            let s = Math.floor((newTime - oldTime) / 1000);
            //已经过了未来时间
            if (s < 0) {
                clearInterval(timer);
            } else {
                let day = Math.floor(s / 86400);
                day %= 86400;
                let hour = Math.floor(s / 3600);
                hour %= 3600;
                let mi = Math.floor(s / 60);
                s %= 60;

                let str = toDouble(day) + "天" + toDouble(hour) + ':' + toDouble(mi) + ':' + toDouble(s);

                //如果传入了函数，就调用函数
                // callback && callback(str);

                if (callback && typeof callback === 'function') {
                    callback(str);
                }

                // if(callback){
                //     callback(str);
                // }
            }

        }, 1000);
    }

    return {
        toDouble,
        sumNum,
        countDown
    }
})();
