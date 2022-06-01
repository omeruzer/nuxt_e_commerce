<template>
    <div class="container">
        <div>
            <b-jumbotron :lead="title"></b-jumbotron>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'title'
    ]
}
</script>

<style lang="scss" scoped>
</style>