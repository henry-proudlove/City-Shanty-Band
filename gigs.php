<section id="gigs">

	<header class="section-title">
		<h2>See Us Play</h2>
	</header> <!-- .section-title -->
	
	<?php

	$querystr = "
	    		
	SELECT wposts.* 
	    		
	FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta
	WHERE wposts.ID = wpostmeta.post_id
 		
    AND wpostmeta.meta_key = 'gig_date'
    AND STR_TO_DATE(wpostmeta.meta_value,'%Y/%m/%d %H:%i') >= CURDATE()
    AND wposts.post_status = 'publish'
    AND wposts.post_type = 'gig'
    ORDER BY STR_TO_DATE(wpostmeta.meta_value,'%Y/%m/%d %H:%i') ASC
    ";

			
	$gigs = $wpdb->get_results($querystr, OBJECT);
 
	if ($gigs):
 		foreach ($gigs as $post):
 		global $post;
 		setup_postdata($post); 
 
 		// Get a friendlier version of the date.
 		$date = get_post_meta($post->ID, 'gig_date', true);
 		$date = date_create($date);
 		$date = date_format($date, 'D j F g:iA');
 		?>
						
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
						
				<header class="entry-header">
		
					<h3 class="entry-title"><?php the_title(); ?></h3>
						
				</header><!-- .entry-header -->
						
				<footer class="entry-meta">
						
					<?php if ( get_post_meta($post->ID, 'venue', true) && get_post_meta($post->ID, 'venue_link', true) ) : ?>
						
        				<span class="venue">
        					<a href="<?php echo get_post_meta($post->ID, 'venue_link', true) ?>" title = 	" <?php echo get_post_meta($post->ID, 'venue', true) ?>">
        					<?php echo get_post_meta($post->ID, 'venue', true)?></a>
        				</span>
        					
        			<?php elseif ( get_post_meta($post->ID, 'venue', true) ): ?>
        					
        				<span class="venue">
        					<?php echo get_post_meta($post->ID, 'venue', true) ?>
        				</span>
        						
        			<?php endif; ?>
        						
        				<time class="gig-date"><?php echo $date ?></time>
						
					
					<?php
					
					if ( get_post_meta($post->ID, 'buy_tickets_text', true ) && get_post_meta($post->ID, 'buy_tickets_link', true )) : ?>

						<span class="more-info">
							<a href="<?php echo get_post_meta($post->ID, 'buy_tickets_link', true) ?>" title = "<?php echo $buy_tix_text ?>">
								<?php echo get_post_meta($post->ID, 'buy_tickets_text', true); ?>
							</a>
						</span>
					
        			<?php elseif (get_post_meta($post->ID, 'buy_tickets_text', true)) : ?>
        				
        				<span class="more-info">
        					<?php echo get_post_meta($post->ID, 'buy_tickets_text', true); ?>
        				</span>
        				
        			<?php elseif (get_post_meta($post->ID, 'buy_tickets_link', true )) : ?>
        			
        				<span class="more-info">
							<a href="<?php echo get_post_meta($post->ID, 'buy_tickets_link', true) ?>" title = "Buy tickets">
								Buy tickets
							</a>
						</span>
					
					<? endif; ?>
					
				</footer><!-- #entry-meta -->
				
			</article>
					
		<?php endforeach;
 	
	else: ?>
		
		<article id="no-gigs-msg">
		
			<header class="entry-header">
				<h3 class="entry-title">Sorry, No gigs coming up</h3>
			</header><!-- .entry-header -->
			
			<footer class="entry-meta">
			
				<span>Check back soon or <a href="http://www.twitter.com/mysadcaptains" title="Follow us on Twitter">Follow us on twitter</a> for incessant updates</span>
				
			</footer><!--entry-meta -->
			
		</article> <!-- #no-gigs-msg -->
		
	<?php endif; ?>
			
</section> <!-- #gigs -->