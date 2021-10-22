const app = new Vue({
    el: '#root',
    data: {
        albums : [],
    },
    created() {
        // Make a request for a user with a given ID
        axios.get('http://localhost/47-PHPAjaxDischi/php-ajax-dischi/api/index.php')
            .then((response) => {
                // handle success
                this.albums = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
})