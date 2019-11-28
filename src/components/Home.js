import React from "react" ;
import 'bootstrap/dist/css/bootstrap.min.css';
// var gcloud = require('gcloud') ;

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
            <React.Fragment>
                <h1 className="display-2">Hi there!</h1>
            </React.Fragment>
        )
    }
}

// ({
//     keyFilename: '/path/to/keyfile.json',
//     projectId: '<YOUR-PROJECT-HERE>'
//   });
//   var vision = gcloud.vision();
  
//   var image = 'image.jpg';
  
//   vision.detectText('image.jpg', function(err, text, apiResponse) {
//     // text = ['This was text found in the image']
//   });