import axios from 'axios'
export default {
    name: 'Peliculas',
    props: ['peliculas'],
    data () {
    	return {
    		peliculasArray: [],
    		error: []
    	}
    },
    methods: {
    	
    },
    created() {
	    axios.get('http://localhost:53397/api/Peliculas')
	    .then(response => {
	      this.peliculasArray = response.data	
	    })
	    .catch(e => {
	      this.errors.push(e)
    	})
    }
}