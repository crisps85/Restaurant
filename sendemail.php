<?php
	$name=trim(strip_tags($_post['name']));
	$email=trim(strip_tags($post['email']));

	$subject='contact form submitted';
	$to ='crisps2@ymail.com';

	$body=<<<html

	$message
	html;
		$headers='from: $email\r\n';
		$headers .='content-type:text/html\r\n';

		mail($to,$subject,$body,$headers);

		header('location:thanks.html');
	?>