new Vue({
    el:"#app",
    data: {
        binary: "",
        decimal : null,
        error: null
    },
    methods:{
        convert:function(){
            this.error = this.check()
            if (this.error){
                this.error = "Please enter a valid binary number"
            }else this.decimal = parseInt(this.binary, 2)
        },
        
        check(){
            for (const i of this.binary) {
                if (i != 0 && i != 1) {
                    return this.error = true
                }
            }
        }
    },
    
})