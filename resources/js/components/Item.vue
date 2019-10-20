<template>
    <div class="my-3">
        <div class="flex justify-between" v-if="$parent.edit">
            <div class="flex w-full">
                <checkbox
                    :value="item.id"
                    :checked="isChecked"
                    @input="toggleCheckbox"
                    class="pr-2"/>
                <label
                    :for="item.id"
                    class="w-full flex justify-between">
                    <input class="w-full" v-on:keydown.enter.prevent v-model="item.body"/>
                </label>
            </div>
            <div class="flex">
                <button @click.prevent="destroy" href="#" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" class="sidebar-icon"><path fill="var(--sidebar-icon)" d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"></path></svg>
                </button>
            </div>
        </div>
        <div v-else class="flex">
            <div class="flex items-center">
                <div class="flex" v-if="isChecked">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" class="sidebar-icon"><path fill="var(--sidebar-icon)" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"></path></svg>
                </div>
                <div class="flex" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" class="sidebar-icon"><path fill="var(--sidebar-icon)" d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"></path></svg>
                </div>
            </div>
            <div class="flex flex-row flex-col">
                <span :class="isChecked ? 'line-through text-80' : ''" v-text="item.body"></span>
                <span class="text-70 text-xs" v-if="secondLineText" v-text="secondLineText"></span>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    export default {
        props: ['item', 'field'],
        methods: {
            toggleCheckbox() {
                if (this.item.completed_at) {
                    this.item.completed_by = null;
                    this.item.completed_at = null;
                } else {
                    this.item.completed_by = this.field.user;
                    this.item.completed_at = Date.now();
                }
            },
            destroy(){
                this.$emit('deleted', this.id);
            },
        },
        computed: {
            isChecked() {
                return this.item.completed_at != null
            },
            completedAt(){
                if(this.item.completed_at){
                    return moment(this.item.completed_at).fromNow()

                }
                return null;
            },
            secondLineText(){
                if(this.completedAt && this.field.user){
                    return `${this.field.user}, ${this.completedAt}`;
                }
                if(this.field.show_timestamps && this.completedAt){
                    return this.completedAt;
                }
                if(this.field.user){
                    return this.item.completed_by;
                }
                return null
            }
        }
    }
</script>
