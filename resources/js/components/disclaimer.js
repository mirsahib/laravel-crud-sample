
    import React from 'react'
    import { Link } from 'react-router-dom'

    const Disclaimer = () => (
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            The App is hosted in heroku free tier,the app may take too long to respond
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
      
    )

    export default Disclaimer