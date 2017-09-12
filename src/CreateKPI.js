import React, {Component} from 'react';
import FileFolder from 'material-ui/svg-icons/file/folder'
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CreateKPI extends Component{
	render(){
		return(
			<Card className="Card">
			    <CardHeader
			      title="URL Avatar"
			      subtitle="Subtitle"
			      avatar={
			        <Avatar icon={<FileFolder />} />
			      }
			    />
			    <CardTitle title="Card title" subtitle="Card subtitle" />
			    <CardText>
			      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
			      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
			      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
			    </CardText>
			    <CardActions>
			      <FlatButton label="Action1" />
			      <FlatButton label="Action2" />
			    </CardActions>
			</Card>
		);

	}
}

export default CreateKPI;