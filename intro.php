<?php

//Pulling intro page data

$page_id = 81; 

$page_data = get_page( $page_id );

$content = apply_filters('the_content', $page_data->post_content);

$title = $page_data->post_title;

//Markup

?>


<section id="intro">

	<header class="entry-title">
		<h1><?php echo $title; ?></h1>
	</header><!-- entry-title -->
	
	<div id="galleria">
	
	<?php
	
	$argsThumb = array(
		'order'          => 'ASC',
		'orderby'		 => 'menu_order',
		'post_type'      => 'attachment',
		'post_parent'    => $page_id,
		'post_mime_type' => 'image',
		'post_status'    => null,
		'posts_per_page' => '-1',
	);
	$attachments = get_posts($argsThumb);
	if ($attachments) {
		foreach ($attachments as $attachment) {
		
			$default_attr = array(
				//'src'	=> $src,
				//'class'	=> "attachment-$size",
				'alt'   => trim(strip_tags( get_post_meta($attachment_id, '_wp_attachment_image_alt', true) )),
				'title' => trim(strip_tags( get_post_meta($attachment_id, '_wp_attachment_image_alt', true) )),
			);
			
			$image_large = wp_get_attachment_image_src( $attachment->ID, 'galleria_img' );
			$image_big = wp_get_attachment_image_src( $attachment->ID, 'galleria_big' ); ?>
			
			<a rel="<?php echo $image_big[0]; ?>" href="<?php echo $image_large[0]; ?>">
			<?php echo wp_get_attachment_image($attachment->ID, 'galleria_thumb', false, $default_attr); ?></a>
			
		<?php }
	} echo trim(strip_tags( get_post_meta($attachment_id, '_wp_attachment_image_alt', true) ));
	?>

	</div> <!-- #band-gallery -->
	
	<div id=csb-social-btns><?php csb_social_menu(); ?></div>
	
	<div class="entry-content">
		<?php echo $content; ?>
	</div> <!-- .entry-content -->

	<div class="music">
	
			<a href="http://www.cityshantyband.com/wp-content/uploads/2011/11/howlin-wind.mp3">Howlin'Wind</a>
			
			<a href="http://www.cityshantyband.com/wp-content/uploads/2011/11/runaway-whale.mp3">Runaway Whale</a>
			
			<a href="http://www.cityshantyband.com/wp-content/uploads/2011/11/Blood-Red-Roses.mp3">Blood Red Roses</a>
	
	</div> <!-- #music -->
	
	<footer class="entry-btn">
	<a href="mailto:cityshantyband@gmail.com" title="Email Us">Email Us</a>
	</footer> <!-- .entry-btn -->

</section> <!-- #intro -->