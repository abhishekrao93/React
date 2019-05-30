import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

function Header(){
	return (
	<div>
		<AppBar position ="static">
			<Toolbar>
				<Typography variant ="title" color="inherit">
						<div>
							<h1>React JS and Material UI TODO Application</h1>
						</div>
												
				</Typography>
			</Toolbar>
		</AppBar>
	</div>
	)
}

export default Header