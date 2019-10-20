<template>
    <panel-item :field="field">

        <slot>
            <h4 class="font-normal text-80" v-text="field.indexName"></h4>
        </slot>

        <p slot="value" class="text-90 flex">
            <items :items="value" :field="field" :edit="false"></items>
        </p>
    </panel-item>
</template>

<script>
    import Items from './Items.vue';

    export default {
        components: {Items},

        props: ['field'],

        computed:{
            value(){
                if(this.field.value){
                    return JSON.parse(this.field.value) || [];
                }
                return [];
            },
        },
    }
</script>
