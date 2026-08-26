let shery = (function(){
    let score = 0;
    return {
        getscore : function()
        {
            console.log(score);
        },

        setscore : function(val)
        {
            score = val;
        },
    };
})();

// type on console : 

// shery
// shery.getscore() // 0
// shery.setscore(1) // 1
// shery.getscore() // 1