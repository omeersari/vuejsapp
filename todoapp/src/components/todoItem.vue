<template>
    <div :class="colorArray[status]" class="px-3 py-3 mb-3">
        <div class="d-flex justify-content-between">
            <div> {{title}}</div>
            <div>
                <button @click="gotoUpdate">
                    Edit
                </button>
            </div>
        </div>
        <div>{{detail}}</div>
    </div>
</template>

<script>
export default {
    name: 'todoItem',
    props: ['index', 'title', 'detail', 'status'],
    data() {
        return {
            colorArray:['bg-info', 'bg-danger', 'bg-primary', 'bg-success'],
        }
    },
    methods:{
        gotoUpdate() {
            this.$emit('onUpdate', this.index)
        }
    }

}
</script>

