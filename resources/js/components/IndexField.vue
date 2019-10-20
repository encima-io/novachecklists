<template>
  <span class="flex" v-text="indexText"></span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
    computed:{
        items(){
            return JSON.parse(this.field.value) || [];
        },
        completed(){
            return this.items.filter(item => item.completed_at != null)
        },
        indexText(){
          if(this.field.show_item_status && this.field.show_completion){
            return this.itemStatus + ' - ' + completion;
          }
          if(this.field.show_item_status){
            return this.itemStatus;

          }
          if(this.field.show_completion){
            return this.completion;
          }
          return this.items.length;
        },
        itemStatus(){
            return this.completed.length + ' / ' + this.items.length;
        },
        completion(){
            return Math.round((this.completed.length/this.items.length)*100) + ' %';
        }
    },
}
</script>
