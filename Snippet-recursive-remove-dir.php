/*
* function to remove recursive file in folder
*/

function recursiveRemoveDirectory( $directory ) {
		foreach ( glob( "{$directory}/*" ) as $file ) {
			// echo "Updating $directory <br>";
			if ( is_dir( $file ) ) {
				recursiveRemoveDirectory( $file );
			} else {
				// echo "Updating $file size " . filesize( $file ) . "<br>";
				unlink( $file );
			}
		}
		rmdir( $directory );
	}
	$cop22Folder = ( 'wp-content/cache/supercache/www.cifor.org/cifor-at-cop22' );
	if(is_dir($cop22Folder)){
		recursiveRemoveDirectory($cop22Folder);
	}
