const app = new Vue({
    el: '#root',
    data: {

    },
    created() {
        // Make a request for a user with a given ID
        axios.get('http://localhost/47%20-%20PHP%20Ajax%20Dischi/php-ajax-dischi/api/index.php')
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
})