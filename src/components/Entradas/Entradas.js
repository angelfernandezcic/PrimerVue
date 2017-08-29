import axios from 'axios'
export default {
    name: 'Entradas',
    props: ['entradas'],
    data () {
    	return {
    		entradasArray: [],
    		error: []
    	}
    },
    methods: {
    	
    },
    created() {
	    axios.get('http://localhost:53397/api/Entradas')
	    .then(response => {
	      this.entradasArray = response.data	
	    })
	    .catch(e => {
	      this.errors.push(e)
    	})
    }
  }