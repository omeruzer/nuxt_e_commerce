<template>
    <div>
        <div class=" d-sm-block d-md-none">
            <b-list-group-item v-b-toggle.collapse-1>
                <h5><i class="fa fa-list"></i> Categories</h5>
            </b-list-group-item>
            <div class="sidebar-item">
                <div class="make-me-sticky">
                    <b-list-group class="sidebar">
                        <b-collapse id="collapse-1" class="mt-2">
                            <b-card>
                                <b-list-group-item v-for="category, i in categories" :key="i">
                                    <nuxt-link :to="{ name: 'category-id', params: { id: category.id } }" tag="a"
                                        class="nav-link">
                                        {{ category.title }}</nuxt-link>
                                </b-list-group-item>
                            </b-card>
                        </b-collapse>
                    </b-list-group>
                </div>
            </div>
        </div>

        <div class="sidebar-item d-none d-sm-block">
            <div class="make-me-sticky">
                <b-list-group class="sidebar">
                    <b-list-group-item v-for="category, i in categories" :key="i">
                        <nuxt-link :to="{ name: 'category-id', params: { id: category.id } }" tag="a" class="nav-link">
                            {{ category.title }}</nuxt-link>
                    </b-list-group-item>
                </b-list-group>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            categories: []
        }
    },
    async fetch() {
        await axios.get('https://bymmc.com.ua/api/categories')
            .then((result) => {
                this.categories = result.data
            }).catch((err) => {
                console.log(err);
            });
    }
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {

    /* some CSS here */
    .sidebar-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }

    .sidebar {
        height: 400px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .sidebar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .sidebar::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
    }

    .sidebar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: rgba(49, 48, 49, 0.4);
    }

    .make-me-sticky {
        position: sticky;
        top: 20px;
        padding: 0 15px;
    }
}
</style>